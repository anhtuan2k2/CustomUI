import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Animated,
  ListRenderItem,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Enctype from 'react-native-vector-icons/Entypo';
import Slider from '@react-native-community/slider';
import FastImage from 'react-native-fast-image';
import {Colors, Typography} from '@styles';
import Neumorphism from '@components/Neumorphism';
import {playListData} from '../../constants/music';
import {
  State,
  Track,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import TrackPlayer from 'react-native-track-player';
const {width} = Dimensions.get('screen');
const setupPlayer = async () => {
  await TrackPlayer.setupPlayer();
  await TrackPlayer.add(playListData);
};
const togglePlayBack = async (stateBack: any) => {
  const currentTrack = TrackPlayer.getCurrentTrack();
  if (currentTrack !== null) {
    if (stateBack === State.Ready || stateBack === State.Paused) {
      await TrackPlayer.play();
    } else if (stateBack === State.Playing) {
      await TrackPlayer.pause();
    }
  }
};
const MusicPlayer = () => {
  const playBackState = usePlaybackState();
  const progress = useProgress();
  const songSlider = useRef<any>(null);
  const [songIndex, setSongIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const skipTo = async (trackId: any) => {
    await TrackPlayer.skip(trackId);
  };
  useEffect(() => {
    setupPlayer();
    scrollX.addListener(({value}) => {
      const index = Math.round(value / width);
      skipTo(index);
      setSongIndex(index);
    });
    return () => {
      scrollX.removeAllListeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const skipToNext = () => {
    songSlider?.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });
    togglePlayBack(playBackState);
  };
  const skipToPrevious = () => {
    songSlider?.current.scrollToOffset({
      offset: (songIndex - 1) * width,
    });
    togglePlayBack(playBackState);
  };
  const renderSongs: ListRenderItem<Track> = ({item}) => {
    return (
      <Animated.View style={styles.wrapSong}>
        <Neumorphism
          size={300}
          children={
            <FastImage
              source={{
                uri: item?.images,
              }}
              style={styles.songArt}
            />
          }
          style={{}}
        />
      </Animated.View>
    );
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{marginHorizontal: 20, width}}>
          <View style={styles.topContainer}>
            <Neumorphism
              children={<AntDesign name="arrowleft" size={20} color={'gray'} />}
              size={40}
              style={{}}
            />
            <View>
              <Text style={styles.playingTxt}>Playing Now</Text>
            </View>
            <Neumorphism
              children={<Enctype name="menu" size={24} color={'gray'} />}
              size={40}
              style={{}}
            />
          </View>
          <View style={{width}}>
            <Animated.FlatList
              ref={songSlider}
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              refreshing={false}
              onRefresh={() => {}}
              horizontal
              showsVerticalScrollIndicator={false}
              bounces={false}
              data={playListData}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: true},
              )}
              renderItem={renderSongs}
              keyExtractor={_item => _item.id.toString()}
            />
          </View>
          <View style={styles.songContainer}>
            <Text style={styles.title}>{playListData[songIndex]?.title}</Text>
            <Text style={styles.artist}>{playListData[songIndex]?.artist}</Text>
          </View>

          <View style={styles.trackContainer}>
            <Slider
              style={styles.slideContainer}
              value={progress.position}
              minimumValue={0}
              maximumValue={progress.duration}
              thumbTintColor="#7B9BFF"
              minimumTrackTintColor="#8AAAFF"
              maximumTrackTintColor="#DAE6F4"
              onSlidingComplete={async value => {
                await TrackPlayer.seekTo(value);
              }}
            />
            <View style={styles.flexCenter}>
              <Text style={styles.time}>
                {new Date(progress.duration * 1000).toISOString().substr(14, 5)}
              </Text>
              <Text style={styles.time}>
                {new Date((progress.duration - progress.position) * 1000)
                  .toISOString()
                  .substr(14, 5)}
              </Text>
            </View>
          </View>
          <View style={styles.controlsContainer}>
            <TouchableOpacity onPress={skipToPrevious}>
              <Neumorphism
                size={65}
                children={
                  <Ionicons
                    name="ios-play-back-sharp"
                    size={24}
                    color="#777777"
                  />
                }
                style={{}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => togglePlayBack(playBackState)}>
              <Neumorphism
                size={65}
                children={
                  <Ionicons
                    name={
                      playBackState === State.Playing
                        ? 'ios-play-circle'
                        : 'ios-pause'
                    }
                    size={24}
                    color="#777777"
                  />
                }
                style={styles.pause}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={skipToNext}>
              <Neumorphism
                size={65}
                children={
                  <Ionicons name="ios-play-forward" size={24} color="#777777" />
                }
                style={{}}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    alignItems: 'center',
    backgroundColor: '#DEE9FD',
  },
  flexCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapSong: {width, justifyContent: 'center', alignItems: 'center'},
  playingTxt: {color: Colors.backgroundDark, ...Typography['16m']},
  songArtContainer: {marginVertical: 32, alignItems: 'center'},
  songArt: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: '#D7E1F3',
    borderWidth: 10,
  },
  songContainer: {alignItems: 'center'},
  title: {fontSize: 30, color: '#6C7A93', fontWeight: '600'},
  artist: {...Typography['14r'], color: 'gray'},
  trackContainer: {marginTop: 32, marginHorizontal: 32, marginBottom: 40},
  controlsContainer: {
    marginHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  time: {...Typography['14r']},
  pause: {backgroundColor: '#8AAAFF', borderColor: '#8AAAFF'},
  wrapControls: {
    flexDirection: 'row',
    marginTop: 30,
    marginHorizontal: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  wrapTime: {flexDirection: 'row', justifyContent: 'space-between'},
  nameSongTxt: {color: '#fff', ...Typography['16m']},
  nameArtistTxt: {color: '#fff', ...Typography['14r']},
  timeTxt: {
    color: '#fff',
    ...Typography['14m'],
  },
  slideContainer: {},
  wrapArtist: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  artWorkWrap: {
    width: width,
    height: 340,
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 3.8,
    elevation: 5,
  },
  artImg: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    borderBottomColor: '#393E46',
    width: width,
    alignItems: 'center',
    borderTopWidth: 1,
  },
  bottomControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

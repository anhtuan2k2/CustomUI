import {View, SafeAreaView, Text} from 'react-native';
import React from 'react';

const Search = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Search</Text>
      </View>
    </SafeAreaView>
  );
};

export default Search;

import {View, SafeAreaView, Text} from 'react-native';
import React from 'react';
const More = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>More</Text>
      </View>
    </SafeAreaView>
  );
};

export default More;

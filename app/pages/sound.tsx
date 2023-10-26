/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef, useState, memo, useCallback} from 'react';

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
  SectionList,
  // SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
// const Sound = require('react-native-sound');
// import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const SoundCom = () => {
  // console.log(Sound, '---WebView');

  // const whoosh = new Sound(require('../assets/video/1111.mp3'), () => {
  //   // whoosh.play();
  //   console.error(whoosh, '---whoosh');
  // });

  const [d, setD] = useState(0);

  return (
    <SafeAreaView style={{backgroundColor: 'transparent'}}>
      <StatusBar barStyle={'light-content'} />

      <View
        style={{
          backgroundColor: 'pink',
          width: '100%',
          height: '100%',
        }}>
        <TouchableWithoutFeedback onPress={async () => {}}>
          <View
            style={{
              height: 100,
              justifyContent: 'center',
            }}>
            <Text>播放音频</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => {}}>
          <View
            style={{
              height: 100,
              justifyContent: 'center',
            }}>
            <Text>暂停音频</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => {}}>
          <View
            style={{
              height: 100,
              justifyContent: 'center',
            }}>
            <Text>停止音频</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => {}}>
          <View
            style={{
              height: 100,
              justifyContent: 'center',
            }}>
            <Text>获取持续时间 {d}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  font: {
    fontSize: 16,
    color: '#fff',
  },
  btn: {
    width: '35%',
    height: 30,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    merginRight: 4,
    flexShrink: 0,
  },
});

export default SoundCom;

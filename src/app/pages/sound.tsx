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
import TrackPlayer, {
  Capability,
  useTrackPlayerEvents,
  usePlaybackState,
  Event,
} from 'react-native-track-player';
// import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const SoundCom = () => {
  console.log(Event, '---Event');
  const fn = async () => {
    await TrackPlayer.setupPlayer();
  };

  useEffect(() => {
    TrackPlayer.setupPlayer()
      .then(async () => {
        debugger; // Stops here on first try
        const track1 = {
          url: require('../assets/video/1111.mp3'), // Load media from the network
        };

        await TrackPlayer.add([track1]);
      })
      .catch(error => {
        console.log(error, '---error');
      });
    return () => {};
  }, []);

  // useEffect(() => {
  //   fn();
  // }, []);
  console.log(TrackPlayer, '---TrackPlayer');

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
        <TouchableWithoutFeedback
          onPress={async () => {
            console.log('---play');
            TrackPlayer.play();
          }}>
          <View
            style={{
              height: 100,
              justifyContent: 'center',
            }}>
            <Text>播放音频</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            TrackPlayer.stop();
          }}>
          <View
            style={{
              height: 100,
              justifyContent: 'center',
            }}>
            <Text>暂停音频</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            TrackPlayer.reset();
          }}>
          <View
            style={{
              height: 100,
              justifyContent: 'center',
            }}>
            <Text>停止音频</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={async () => {
            const {position, duration} = await TrackPlayer.getProgress();
            // const duration = await TrackPlayer.getDuration();
            console.log(`${position} -${duration} seconds left.`);
            setD(position);
          }}>
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

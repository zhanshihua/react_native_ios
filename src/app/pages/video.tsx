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
import Video from 'react-native-video';

const VideoCom = () => {
  // useEffect(() => {
  //   fn();
  // }, []);
  console.log(Video, '---VideoVideoVideoVideo');

  return (
    <SafeAreaView style={{backgroundColor: 'transparent'}}>
      <StatusBar barStyle={'light-content'} />

      <View
        style={{
          backgroundColor: 'pink',
          width: '100%',
          height: '100%',
        }}>
        <Video
          style={{
            width: '100%',
            height: '100%',
          }}
          controls={true}
          source={require('../assets/video/test.mp4')} // Can be a URL or a local file.
        />
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

export default VideoCom;

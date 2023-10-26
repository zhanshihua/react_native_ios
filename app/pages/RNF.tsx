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
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {MMKV} from 'react-native-mmkv';
const RNF = () => {
  const RNFS = require('react-native-fs');
  console.log(RNFS, '-------RNFS');
  const uploadUrl = 'https://img.k986.com/static/img/video/video.mp4';
  const videoUri = `${RNFS.CachesDirectoryPath}/video.mp4`;
  const storage = new MMKV({
    id: 'rfs',
  });

  const fn = () => {
    RNFS.downloadFile({
      fromUrl: uploadUrl,
      toFile: videoUri,
    })
      .promise.then(msg => {
        console.log(msg, 'msgmsgmsgv');
        if (msg.statusCode === 200) {
          console.error('downloadFile---then', msg);
          // storage.set('video', videoUri);
        }
      })
      .catch(err => {
        console.error('downloadFile---catch', err);
      });
  };
  useEffect(() => {
    fn();
    storage.addOnValueChangedListener(key => {
      console.error(
        key,
        storage.getString('name'),
        '---addOnValueChangedListener',
      );
    });
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: 'transparent'}}>
      <StatusBar barStyle={'light-content'} />

      <TouchableWithoutFeedback
        onPress={() => {
          storage.set('name', '张三');
        }}>
        <View
          style={{
            width: 200,
            height: 100,
            backgroundColor: 'pink',
            margin: 20,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
            }}>
            文件set
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => {
          const name = storage.getString('name');
          console.log(name, '----name');
        }}>
        <View
          style={{
            width: 200,
            height: 100,
            backgroundColor: 'pink',
            margin: 20,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
            }}>
            文件get
          </Text>
        </View>
      </TouchableWithoutFeedback>
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

export default RNF;

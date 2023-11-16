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
import DeviceInfo from 'react-native-device-info';
const DeviceCom = () => {
  console.error(DeviceInfo, '---DeviceInfo');
  let appName = DeviceInfo.getApplicationName();
  let appVersion = DeviceInfo.getVersion();
  let packageName = DeviceInfo.getBundleId();

  return (
    <SafeAreaView style={{backgroundColor: 'transparent'}}>
      <StatusBar barStyle={'light-content'} />

      <View
        style={{
          backgroundColor: 'pink',
          width: '100%',
          height: '100%',
          paddingTop: 50,
        }}>
        <View
          style={{
            height: 20,
            justifyContent: 'center',
          }}>
          <Text>appName ---{appName}</Text>
          <Text>appVersion ---{appVersion}</Text>
          <Text>包名 ---{packageName}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DeviceCom;

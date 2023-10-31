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
  let brand = DeviceInfo.getBrand();
  let DeviceId = DeviceInfo.getDeviceId();
  const [FirstInstallTime, setFirstInstallTime] = useState('');

  const [InstallerPackageName, setInstallerPackageName] = useState('');
  const [LastUpdateTime, setLastUpdateTime] = useState('');
  const [UniqueId, setUniqueId] = useState('');

  const fn = async () => {
    let res = await DeviceInfo.getFirstInstallTime();
    setFirstInstallTime(res);
    let res1 = await DeviceInfo.getInstallerPackageName();
    setInstallerPackageName(res1);

    let res2 = await DeviceInfo.getLastUpdateTime();
    setLastUpdateTime(res2);

    let res3 = await DeviceInfo.getUniqueId();
    setUniqueId(res3);
  };
  fn();

  return (
    <SafeAreaView style={{backgroundColor: 'transparent'}}>
      <StatusBar barStyle={'light-content'} />

      <View
        style={{
          backgroundColor: 'pink',
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            height: 20,
            justifyContent: 'center',
          }}>
          <Text>appName ---{appName}</Text>
        </View>
        <View
          style={{
            height: 20,
            justifyContent: 'center',
          }}>
          <Text>appVersion ---{appVersion}</Text>
        </View>

        <View
          style={{
            height: 20,
            justifyContent: 'center',
          }}>
          <Text>brand ---{brand}</Text>
        </View>

        <View
          style={{
            height: 20,
            justifyContent: 'center',
          }}>
          <Text>brand ---{brand}</Text>
        </View>

        <View
          style={{
            height: 20,
            justifyContent: 'center',
          }}>
          <Text>DeviceId ---{DeviceId}</Text>
        </View>

        <View
          style={{
            height: 20,
            justifyContent: 'center',
          }}>
          <Text>FirstInstallTime ---{FirstInstallTime}</Text>
        </View>

        <View
          style={{
            height: 20,
            justifyContent: 'center',
          }}>
          <Text>InstallerPackageName ---{InstallerPackageName}</Text>
        </View>

        <View
          style={{
            height: 20,
            justifyContent: 'center',
          }}>
          <Text>LastUpdateTime ---{LastUpdateTime}</Text>
        </View>

        <View
          style={{
            height: 20,
            justifyContent: 'center',
          }}>
          <Text>UniqueId ---{UniqueId}</Text>
        </View>
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

export default DeviceCom;

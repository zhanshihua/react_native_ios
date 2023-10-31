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
import Toast from 'react-native-root-toast';
import Spinner from 'react-native-loading-spinner-overlay';

const ToastCom = () => {
  const toast = str => {
    Toast.show(str, {
      duration: Toast.durations.LONG,
      position: Toast.positions.CENTER,
      shadow: true,
      animation: true,
      hideOnPress: false,
      delay: 0,
      onShow: () => {
        // calls on toast\`s appear animation start
        console.error('---onShow');
      },
      onShown: () => {
        console.error('---onShown');
        // calls on toast\`s appear animation end.
      },
      onHide: () => {
        console.error('---onHide');
        // calls on toast\`s hide animation start.
      },
      onHidden: () => {
        console.error('---onHidden');
        // calls on toast\`s hide animation end.
      },
    });
  };
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
          onPress={() => {
            console.error('TouchableWithoutFeedback');
            toast('1111');
          }}>
          <View
            style={{
              height: 100,
              justifyContent: 'center',
            }}>
            <Text>TOAST</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            console.error('TouchableWithoutFeedback');
            toast('2222');
          }}>
          <View
            style={{
              height: 100,
              justifyContent: 'center',
            }}>
            <Text>TOAST2222</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            console.error('TouchableWithoutFeedback');
            toast('2222');
          }}>
          <View
            style={{
              height: 100,
              justifyContent: 'center',
            }}>
            <Text>loading </Text>
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

export default ToastCom;

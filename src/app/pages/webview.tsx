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
import {WebView} from 'react-native-webview';
import {SafeAreaView} from 'react-native-safe-area-context';

const WebViewCom = () => {
  // console.log(WebView, '---WebView');
  const navigation = useNavigation();

  window.onload = params => {
    console.log(111);
  };
  const url = 'https://scan.kuku2.com/h5/callCenter';
  const urlBaidu = 'https://www.baidu.com/?xx=111';
  return (
    <SafeAreaView style={{backgroundColor: 'transparent'}}>
      <StatusBar barStyle={'light-content'} />

      <View
        style={{
          backgroundColor: 'pink',
          width: '100%',
          height: '100%',
        }}>
        <WebView
          onLayout={() => {
            console.error('-----onLayout');
          }}
          postMessage={'1111111'}
          injectedJavaScript={`
                (function () {
                  window.document.querySelector('body').style.background = 'red'
                })()
              `}
          onLoadEnd={() => {
            console.log('-----onLoadEnd');
          }}
          onMessage={event => {
            console.error('-----onMessage', event);
          }}
          source={{uri: url}}
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

export default WebViewCom;

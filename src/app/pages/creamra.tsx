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
  TouchableWithoutFeedback,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import {
  GestureHandlerRootView,
  RectButton,
  TouchableOpacity,
  ScrollView,
} from 'react-native-gesture-handler';

const Creamra = () => {
  // console.log(ImagePicker, '---ImagePicker');
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{backgroundColor: 'transparent'}}>
        <StatusBar barStyle={'light-content'} />

        <ScrollView>
          <TouchableWithoutFeedback
            onPress={() => {
              console.log('---onPress');
              ImagePicker.openCamera({
                cropping: true,
              })
                .then(res => {
                  console.log(res, '---openCamera');
                })
                .catch(err => {
                  console.log(err, '---openCamera');
                });
            }}>
            <View>
              <RectButton>
                <Text style={{padding: 50}}>点击拍照</Text>
              </RectButton>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              ImagePicker.openPicker({
                cropping: true,
              })
                .then(res => {
                  console.log(res, '---openPicker');
                })
                .catch(err => {
                  console.log(err, '---openPicker');
                });
            }}>
            <View>
              <RectButton>
                <Text style={{padding: 50}}>访问文件</Text>
              </RectButton>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({});

export default Creamra;

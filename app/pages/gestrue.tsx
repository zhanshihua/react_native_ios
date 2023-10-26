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
  TouchableHighlight,
} from 'react-native-gesture-handler';

const Gesture = () => {
  // console.log(ImagePicker, '---ImagePicker');
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{backgroundColor: 'transparent'}}>
        <StatusBar barStyle={'light-content'} />

        <ScrollView>
          <TouchableWithoutFeedback
            onPress={() => {
              // ImagePicker.openCamera({
              //   cropping: true,
              // })
              //   .then(res => {
              //     console.log(reXs, '---openCamera');
              //   })
              //   .catch(err => {
              //     console.log(err, '---openCamera');
              //   });
            }}>
            <View>
              <RectButton>
                <Text style={{padding: 50}}>手势</Text>
              </RectButton>
            </View>
          </TouchableWithoutFeedback>
          <TouchableOpacity
            onPress={() => {
              // ImagePicker.openCamera({
              //   cropping: true,
              // })
              //   .then(res => {
              //     console.log(res, '---openCamera');
              //   })
              //   .catch(err => {
              //     console.log(err, '---openCamera');
              //   });
            }}>
            <View>
              <RectButton>
                <Text style={{padding: 50}}>手势</Text>
              </RectButton>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // ImagePicker.openCamera({
              //   cropping: true,
              // })
              //   .then(res => {
              //     console.log(res, '---openCamera');
              //   })
              //   .catch(err => {
              //     console.log(err, '---openCamera');
              //   });
            }}>
            <View>
              <RectButton>
                <Text style={{padding: 50}}>手势</Text>
              </RectButton>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // ImagePicker.openCamera({
              //   cropping: true,
              // })
              //   .then(res => {
              //     console.log(res, '---openCamera');
              //   })
              //   .catch(err => {
              //     console.log(err, '---openCamera');
              //   });
            }}>
            <View>
              <RectButton>
                <Text style={{padding: 50}}>手势</Text>
              </RectButton>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // ImagePicker.openCamera({
              //   cropping: true,
              // })
              //   .then(res => {
              //     console.log(res, '---openCamera');
              //   })
              //   .catch(err => {
              //     console.log(err, '---openCamera');
              //   });
            }}>
            <View>
              <RectButton>
                <Text style={{padding: 50}}>手势</Text>
              </RectButton>
            </View>
          </TouchableOpacity>
          <View>
            <RectButton>
              <Text style={{padding: 50}}>手势</Text>
            </RectButton>
          </View>
          <View>
            <RectButton>
              <Text style={{padding: 50}}>手势</Text>
            </RectButton>
          </View>

          <View>
            <RectButton>
              <Text style={{padding: 50}}>手势</Text>
            </RectButton>
          </View>

          <TouchableHighlight
            onPressIn={() => {
              console.log('---TouchableHighlight');
            }}>
            <View>
              <RectButton>
                <Text style={{padding: 50}}>手势</Text>
              </RectButton>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({});

export default Gesture;

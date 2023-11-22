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

import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

const GestureCom = () => {
  // console.log(ImagePicker, '---ImagePicker');

  const isPressed = useSharedValue(false);
  const offset = useSharedValue({x: 0, y: 0});

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value.x}, {translateY: offset.value.y}],
      backgroundColor: isPressed.value ? 'blue' : '#ccc',
    };
  });

  const dragGesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onChange(e => {
      offset.value = {
        x: e.changeX + offset.value.x,
        y: e.changeY + offset.value.y,
      };
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{backgroundColor: 'transparent'}}>
        <StatusBar barStyle={'light-content'} />

        <ScrollView>
          <GestureDetector gesture={dragGesture}>
            <Animated.View
              style={[
                {
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                },
                animatedStyles,
              ]}
            />
          </GestureDetector>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({});

export default GestureCom;

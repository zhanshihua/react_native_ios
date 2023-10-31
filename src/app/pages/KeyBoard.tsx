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
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const KeyBoard = () => {
  const textInputRef = useRef(null);
  return (
    <SafeAreaView style={{backgroundColor: 'transparent'}}>
      <StatusBar barStyle={'light-content'} />

      <View
        style={{
          backgroundColor: 'pink',
          width: '100%',
          height: '100%',
          paddingTop: '120%',
        }}>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={120}>
          <TextInput
            style={{
              padding: 10,
              fontSize: 16,
              color: 'red',
              borderColor: 'black',
              borderWidth: 2,
            }}
            placeholder={'My Input1111'}
          />
        </KeyboardAvoidingView>

        <KeyboardAwareScrollView
          getTextInputRefs={() => {
            return textInputRef?.current;
          }}
          style={{
            backgroundColor: 'pink',
            height: 100,
            width: '100%',
          }}>
          <TextInput
            ref={r => {
              // textInputRef?.current = r;
            }}
            style={{
              padding: 10,
              fontSize: 16,
              color: 'red',
              borderColor: 'black',
              borderWidth: 2,
            }}
            placeholder={'My Input'}
          />
        </KeyboardAwareScrollView>
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

export default KeyBoard;

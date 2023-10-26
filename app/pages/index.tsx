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

const Index = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor: 'transparent'}}>
      <StatusBar barStyle={'light-content'} />

      <View>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
          }}>
          首页
        </Text>
      </View>

      <ScrollView
        style={{
          marginTop: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Creamra');
            }}>
            <View style={styles.btn}>
              <Text style={styles.font}>掉用相机</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Gesture');
            }}>
            <View style={styles.btn}>
              <Text style={styles.font}>手势</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('RNF');
            }}>
            <View style={styles.btn}>
              <Text style={styles.font}>文件/存储</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('WebView');
            }}>
            <View style={styles.btn}>
              <Text style={styles.font}>WebView</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Sound');
            }}>
            <View style={styles.btn}>
              <Text style={styles.font}>音频</Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.btn}>
            <Text style={styles.font}>动画</Text>
          </View>
        </View>
      </ScrollView>
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

export default Index;

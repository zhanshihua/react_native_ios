import React, {useEffect} from 'react';
import {BackHandler, ToastAndroid, StyleSheet, Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Index from '../pages/index';

const TabBarConfig = [
  {
    name: 'Home',
    component: Index,
    icon: require('../assets/images/tab/index.png'),
    selectIcon: require('../assets/images/tab/index-select.png'),
    options: {
      headerShown: false,
    },
  },
];

const Tab = createBottomTabNavigator();

const TabNavigator = props => {
  const {route} = props;

  let lastBackPressed = 0;
  const HandleBackPressd = () => {
    if (lastBackPressed && lastBackPressed + 2000 >= Date.now()) {
      BackHandler.exitApp();
      return false;
    }
    lastBackPressed = Date.now();
    ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', HandleBackPressd);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', HandleBackPressd);
    };
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {TabBarConfig.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.name}
            component={item.component}
            initialParams={route.params}
            options={item.options}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigator;

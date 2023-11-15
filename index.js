/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName, env} from './app.json';
import TrackPlayer from 'react-native-track-player';
console.log(env, '----env');
TrackPlayer.registerPlaybackService(() => require('./service'));
AppRegistry.registerComponent(appName, () => App);

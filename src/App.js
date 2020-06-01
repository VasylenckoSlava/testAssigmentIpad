import React, {Component} from 'react';
import {UIManager} from 'react-native';
//import SplashScreen from 'react-native-splash-screen';

import {AuthNavigator} from './navigation';

// UIManager.setLayoutAnimationEnabledExperimental &&
//   UIManager.setLayoutAnimationEnabledExperimental(true);

export const App = () => {
  return <AuthNavigator />;
};

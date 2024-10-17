/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import Main from './src/screens/Main';
import {NavigationContainer} from '@react-navigation/native';
import {Stack} from 'navigation';
import History from 'screens/History';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TypographyText from 'components/common/TypographyText';
import TabBar from 'navigation/TabBar';

export default function App() {
  return (
    <NavigationContainer>
      <TabBar />
    </NavigationContainer>
  );
}

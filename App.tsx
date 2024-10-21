/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {SafeAreaView, View} from 'react-native';

import Main from './src/screens/Main';
import {NavigationContainer} from '@react-navigation/native';
import {Stack} from 'navigation';
import History from 'screens/History';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TypographyText from 'components/common/TypographyText';
import TabBar from 'navigation/TabBar';
import {Provider} from 'react-redux';
import { setupStore } from 'store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const store = setupStore()

export default function App() {

  // useEffect(() => {
  //   AsyncStorage.removeItem('@jokes')
  // }, [])

  return (
    <View className='bg-white flex flex-1'>
      <Provider store={store}>
      <NavigationContainer>
        <TabBar />
      </NavigationContainer>
    </Provider>
    </View>
  );
}
  
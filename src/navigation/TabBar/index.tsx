import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import TypographyText from 'components/common/TypographyText';
import Main from 'screens/Main';
import History from 'screens/History';
import LightningSvg from 'assets/icons/lightning.svg';
import HistorySvg from 'assets/icons/history.svg'

// import { Container } from './styles';

const Tab = createBottomTabNavigator();

const TabBar: React.FC = () => {
  return (
    <Tab.Navigator
    
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: props => {
            return (
              <LightningSvg
                className={`${props.focused ? 'text-primary' : 'text-grey'}`}
              />
            );
          },
          tabBarLabel: props => (
            <TypographyText
              variant="subCaption"
              className={`mt-2 ${props.focused ? 'text-primary' : 'text-grey'}`}>
              Today
            </TypographyText>
          ),
          // tabBarLabel
        }}
        name="Main"
        component={Main}
      />
      <Tab.Screen
        options={{
          tabBarIcon: props => {
            return (
              <HistorySvg
                className={`${props.focused ? 'text-primary' : 'text-grey'}`}
              />
            );
          },
          tabBarLabel: props => (
            <TypographyText
              variant="subCaption"
              className={`mt-2 ${props.focused ? 'text-primary' : 'text-grey'}`}>
              History
            </TypographyText>
          ),
          // tabBarLabel
        }}
        name="History"
        component={History}
      />
    </Tab.Navigator>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabBar: {
    paddingTop: 10
  }
})

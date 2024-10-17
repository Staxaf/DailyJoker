import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import MainJoke from 'components/common/MainJoke';
import ScreenTitle from 'components/common/ScreenTitle';
import {StackParamList} from 'navigation';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  StackParamList,
  'Main'
>;

const Main: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <SafeAreaView>
      <View className="h-full">
        <ScreenTitle title="Today" />
        <MainJoke />
      </View>
    </SafeAreaView>
  );
};

export default Main;

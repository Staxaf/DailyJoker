import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import MainJoke from 'components/common/MainJoke';
import ScreenTitle from 'components/common/ScreenTitle';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import useStoragePersist from 'hooks/useStoragePersist';
import { JokeType } from 'models/IJoke';
import {StackParamList} from 'navigation';
import React, { useCallback, useEffect } from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import { getJoke } from 'store/jokes/jokesThunks';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  StackParamList,
  'Main'
>;

const Main: React.FC = () => {
  const dispatch = useAppDispatch()
  const {currentJoke, jokes} = useAppSelector(state => state.jokesReducer)

  useStoragePersist<JokeType>('@jokes', jokes) // hook for saving info in Async Storage

  useEffect(() => {
    dispatch(getJoke())
  }, [])

  return (
    <SafeAreaView>
      <View className="h-full">
        <ScreenTitle title="Today" />
        {currentJoke && <MainJoke currentJoke={currentJoke} />}
      </View>
    </SafeAreaView>
  );
};

export default Main;

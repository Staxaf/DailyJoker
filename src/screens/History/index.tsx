import HistoryItems from 'components/common/HistoryItems';
import ScreenTitle from 'components/common/ScreenTitle';
import { useAppSelector } from 'hooks/useAppSelector';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

// import { Container } from './styles';

const History: React.FC = () => {

  const {jokes} = useAppSelector(state => state.jokesReducer)

  return (
    <SafeAreaView>
      <View className="h-full">
        <ScreenTitle title="History" />
        <HistoryItems jokes={jokes} />
      </View>
    </SafeAreaView>
  );
};

export default History;

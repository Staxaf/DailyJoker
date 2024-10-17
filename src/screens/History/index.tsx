import HistoryItems from 'components/common/HistoryItems';
import ScreenTitle from 'components/common/ScreenTitle';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

// import { Container } from './styles';

const History: React.FC = () => {
  return (
    <SafeAreaView>
      <View className="h-full">
        <ScreenTitle title="History" />
        <HistoryItems />
      </View>
    </SafeAreaView>
  );
};

export default History;

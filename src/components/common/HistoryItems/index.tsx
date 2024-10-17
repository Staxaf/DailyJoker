import React, { useCallback } from 'react';
import {FlatList, View} from 'react-native';
import HistoryItem from './HistoryItem';

// import { Container } from './styles';

interface HistoryItemType {
  id: number; // or number, depending on your data structure
  text: string;
}


const HistoryItems: React.FC = () => {

  const keyExtractor = useCallback((item:HistoryItemType) => `${item.id}`, []);

  // renderItem using useCallback to optimize rendering
  const renderItem = useCallback(({ item }: { item: HistoryItemType }) => {
    return <HistoryItem text={item.text} />;
  }, []);

  const history: HistoryItemType[] = [
    {
      id: 1,
      text: "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.",
    },
    {
      id: 2,
      text: "I'll never forget my Granddad's last words to me just before he died. \"Are you still holding the ladder?",
    },
    {
      id: 3,
      text: "I just got fired from my job at the keyboard factory. They told me I wasn't putting in enough shifts.",
    },
    {
      id: 4,
      text: "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.",
    },
    {
      id: 5,
      text: "I'll never forget my Granddad's last words to me just before he died. \"Are you still holding the ladder?",
    },
    {
      id: 6,
      text: "I just got fired from my job at the keyboard factory. They told me I wasn't putting in enough shifts.",
    },
  ];

  return (
    <View>
      <FlatList
        data={history}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={{paddingVertical: 20}}
        className='p-6 mb-32'

      />
    </View>
  );
};

export default HistoryItems;

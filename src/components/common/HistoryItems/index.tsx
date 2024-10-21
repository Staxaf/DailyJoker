import React, { useCallback } from 'react';
import {FlatList, View} from 'react-native';
import HistoryItem from './HistoryItem';
import { JokeType } from 'models/IJoke';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { toggleLikeJoke } from 'store/jokes/jokesSlice';

type HistoryItemsType = {
  jokes: JokeType[]
}


const HistoryItems: React.FC<HistoryItemsType> = ({jokes}) => {
  const dispatch = useAppDispatch()
  const keyExtractor = useCallback((item:JokeType, index: number) => `${index}.${item.id}`, []);

  const toggleIsLiked = useCallback((id: number) => {
    dispatch(toggleLikeJoke(id))
  }, [])

  const renderItem = useCallback(({ item }: { item: JokeType }) => {
    return <HistoryItem text={item.joke} isLiked={item.isLiked} 
    onPress={() => toggleIsLiked(item.id)} />;
  }, []);

  return (
    <View>
      <FlatList
        data={jokes}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={{paddingVertical: 20}}
        className='p-6 mb-32'

      />
    </View>
  );
};

export default HistoryItems;

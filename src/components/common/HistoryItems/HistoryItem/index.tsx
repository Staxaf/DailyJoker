import TypographyText from 'components/common/TypographyText';
import LikeButton from 'components/ui/LikeButton';
import React from 'react';
import {View} from 'react-native';

type HistoryItemType = {
  text: string,
  isLiked: boolean
  onPress: () => void
}

const HistoryItem: React.FC<HistoryItemType> = ({text, isLiked, onPress}) => {
  return <View className='flex-row justify-between items-center pb-6 border-b-2 border-lightGrey mb-6'>
    <TypographyText variant='caption' className='w-8/12'>{text}</TypographyText>
    <LikeButton isLiked={isLiked} size="small" onPress={onPress} />
  </View>;
};

export default HistoryItem;

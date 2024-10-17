import TypographyText from 'components/common/TypographyText';
import LikeButton from 'components/ui/LikeButton';
import React from 'react';
import {View} from 'react-native';

// import { Container } from './styles';

type HistoryItemType = {
  text: string
}

const HistoryItem: React.FC<HistoryItemType> = ({text}) => {
  return <View className='flex-row justify-between items-center pb-6 border-b-2 border-lightGrey mb-6'>
    <TypographyText variant='caption' className='w-8/12'>{text}</TypographyText>
    <LikeButton isLiked={false} size="small" onPress={() => {}} />
  </View>;
};

export default HistoryItem;

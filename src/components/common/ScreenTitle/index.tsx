import React from 'react';
import {View} from 'react-native';
import TypographyText from '../TypographyText';

// import { Container } from './styles';

type ScreenTitleType = {
  title: string
}

const ScreenTitle: React.FC<ScreenTitleType> = ({title}) => {
  return (
    <View className='pt-16 px-6 pb-6 border-b-2 border-lightGrey'>
      <TypographyText variant='title'>{title}</TypographyText>
    </View>
  );
};

export default ScreenTitle;

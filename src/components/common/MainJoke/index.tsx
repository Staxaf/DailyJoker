import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import TypographyText from '../TypographyText';
import LikeButton from 'components/ui/LikeButton';

// import { Container } from './styles';

const MainJoke: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleIsLiked = useCallback(() => {
    setIsLiked(isLiked => !isLiked);
  }, [isLiked]);

  return (
    <>
      <View className="flex-1 px-6 justify-center items-start">
        <TypographyText variant="subtitle" className="leading-10 mb-4">
          Java is like Alzheimer's, it starts off slow, but eventually, your
          memory is gone.
        </TypographyText>
          <LikeButton size={'big'} isLiked={isLiked} onPress={toggleIsLiked} />
      </View>
    </>
  );
};

export default MainJoke;

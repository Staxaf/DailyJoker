import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import TypographyText from '../TypographyText';
import LikeButton from 'components/ui/LikeButton';
import { JokeType } from 'models/IJoke';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { toggleLikeJoke } from 'store/jokes/jokesSlice'; 

type MainJokeType = {
  currentJoke: JokeType
}

const MainJoke: React.FC<MainJokeType> = ({currentJoke}) => {
  const dispatch = useAppDispatch()

  const toggleIsLiked = useCallback(() => {
    dispatch(toggleLikeJoke(currentJoke.id))
  }, [currentJoke]);

  return (
    <>
      <View className="flex-1 px-6 justify-center items-start">
        <TypographyText variant="subtitle" className="leading-10 mb-4">
          {currentJoke.joke}
        </TypographyText>
          <LikeButton size={'big'} isLiked={currentJoke.isLiked} onPress={toggleIsLiked} />
      </View>
    </>
  );
};

export default MainJoke;

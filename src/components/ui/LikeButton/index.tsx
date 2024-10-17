import React, {useMemo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import LikeSvg from 'assets/icons/like.svg';
import LikeSelectedSvg from 'assets/icons/like_selected.svg';

// import { Container } from './styles';

type LikeButtonType = {
  size?: 'big' | 'small';
  isLiked: boolean;
  onPress: () => void;
};

const LikeButton: React.FC<LikeButtonType> = ({
  size = 'big',
  isLiked,
  ...props
}) => {
  const sizes = useMemo(
    () => ({
      big: 'w-16 h-16',
      small: 'w-12 h-12',
    }),
    [],
  );
  return (
    <TouchableOpacity
      className={`${sizes[size]} ${
        isLiked ? 'bg-primary' : 'bg-secondary'
      } rounded-full items-center justify-center`}
      {...props}>
      {isLiked ? <LikeSelectedSvg /> : <LikeSvg />}
    </TouchableOpacity>
  );
};

export default LikeButton;

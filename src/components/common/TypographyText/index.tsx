import React from 'react';
import { Text, TextProps } from 'react-native';


interface TypographyProps extends TextProps {
  variant?: 'title' | 'subtitle' | 'caption' | 'subCaption'; 
}


const TypographyText: React.FC<TypographyProps> = ({ variant = 'caption', style, className, ...props }) => {
  const variantStyles = {
    title: 'text-4xl font-bold',
    subtitle: 'text-3xl font-semibold',
    caption: 'font-medium text-xl',
    subCaption: 'text-s font-semibold',
  };

  return (
    <Text className={`${variantStyles[variant]} ${className}`} style={style} {...props}>
      {props.children}
    </Text>
  );
};

export default TypographyText;
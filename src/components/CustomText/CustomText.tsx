import React from 'react';
import { Text } from 'react-native';
import { CustomTextType } from './CustomText.type';

const CustomText = (props: CustomTextType) => {
  const { text, customStyle } = props;

  return (
    <Text style={customStyle}>{text}</Text>
  );
};

export default CustomText;

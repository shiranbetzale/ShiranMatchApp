import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';
import { styles } from './CustomText.style';
import { CustomTextType } from './CustomText.type';

const CustomText = (props: CustomTextType) => {
  const { text } = props;

  return (
    <Text>{text}</Text>
  );
};

export default CustomText;

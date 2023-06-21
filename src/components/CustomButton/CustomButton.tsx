import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './CustomButton.style';
import { CustomButtonType } from './CustomButton.type';

const CustomButton = (props: CustomButtonType) => {
  const { onPress = () => { }, text, customStyle } = props;

  return (
    <TouchableOpacity style={[customStyle, { ...styles.button }]} onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

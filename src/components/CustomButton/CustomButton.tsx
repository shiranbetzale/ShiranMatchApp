import React from 'react';
import { TouchableOpacity } from 'react-native';
import CustomText from '../CustomText/CustomText';
import { styles } from './CustomButton.style';
import { CustomButtonType } from './CustomButton.type';

const CustomButton = (props: CustomButtonType) => {
  const { onPress = () => { }, text, customStyle, disabled } = props;

  return (
    <TouchableOpacity
      style={[styles.button, { ...customStyle }]}
      onPress={onPress} disabled={disabled}
    >
      <CustomText text={text} />
    </TouchableOpacity>
  );
};

export default CustomButton;

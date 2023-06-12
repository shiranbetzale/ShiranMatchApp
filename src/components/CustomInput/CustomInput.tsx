import React, { useState } from 'react';
import { TextInput } from 'react-native';
import CustomText from '../CustomText/CustomText';
import { styles } from './CustomInput.style';
import { CustomInputType } from './CustomInput.type';

const CustomInput = (props: CustomInputType) => {
  const { placeholder, keyboardType, multiline = false } = props;

  const [text, onChangeText] = useState<string>('');

  return (
    <>
      <CustomText text={placeholder} />
      <TextInput
        style={[styles.input, multiline && styles.textArea]}
        onChangeText={onChangeText}
        value={text}
        keyboardType={keyboardType}
        multiline={multiline}
      />
    </>
  );
};

export default CustomInput;

import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import CustomText from '../CustomText/CustomText';
import { styles } from './CustomInput.style';
import { CustomInputType } from './CustomInput.type';

const CustomInput = (props: CustomInputType) => {
  const { placeholder, keyboardType, multiline = false } = props;

  const [text, onChangeText] = useState<string>('');

  return (
    <View style={[styles.container, multiline && styles.textAreaContainer]}>
      <CustomText text={placeholder} />
      <TextInput
        style={[styles.input, multiline && styles.textArea]}
        onChangeText={onChangeText}
        value={text}
        keyboardType={keyboardType}
        multiline={multiline}
      />
    </View>
  );
};

export default CustomInput;

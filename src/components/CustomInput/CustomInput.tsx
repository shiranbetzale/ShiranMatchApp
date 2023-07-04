import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import CustomText from '../CustomText/CustomText';
import { styles } from './CustomInput.style';
import { CustomInputType } from './CustomInput.type';

const CustomInput = (props: CustomInputType) => {
  const { defaultValue = '', placeholder, keyboardType, multiline = false, editable = true } = props;
  const [text, onChangeText] = useState<string>('');
  const defaultValueStr = defaultValue?.toString();

  return (
    <View style={[styles.container, multiline && styles.textAreaContainer]}>
      <CustomText text={placeholder} />
      <TextInput
        style={[styles.input, multiline && styles.textArea]}
        onChangeText={onChangeText}
        value={!editable ? defaultValueStr : text}
        keyboardType={keyboardType}
        multiline={multiline}
        editable={editable}
      />
    </View>
  );
};

export default CustomInput;

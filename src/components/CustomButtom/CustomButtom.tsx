import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './CustomButtom.style';
import {CustomButtomType} from './CustomButton.type';

const CustomButtom = (props: CustomButtomType) => {
  const {onPress = () => {}, text} = props;

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButtom;

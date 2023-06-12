import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { CustomRadioButtonType } from './CustomRadioButton.type';
import { styles } from './CustomRadioButton.style';
import CustomText from '../CustomText/CustomText';
import { Option } from '../../utils/FormFields.type';

const CustomRadioButton = (props: CustomRadioButtonType) => {
  const { radiosArray, text, onSelect = () => { } } = props;
  const [selectedOption, setSelectedOption] = useState<Option>(radiosArray[0]);

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    onSelect(option)
  };

  return (
    <>
      <CustomText text={text} />
      <View style={styles.container} >
        {radiosArray.map((radioItem) => {
          return <TouchableOpacity style={styles.btn} onPress={() => handleOptionSelect(radioItem)}>
            <View style={styles.optionsContainer}>
              <View style={[styles.circle, selectedOption.label === radioItem.label && styles.selectedCircle]} />
              <CustomText text={radioItem.label} />
            </View>
          </TouchableOpacity>
        })}
      </View>
    </>
  );
};

export default CustomRadioButton;
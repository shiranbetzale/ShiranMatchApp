import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { CustomRadioButtonType, RadiosObj } from './CustomRadioButton.type';
import { styles } from './CustomRadioButton.style';
import CustomText from '../CustomText/CustomText';

const CustomRadioButton = (props: CustomRadioButtonType) => {
  const { radiosArray } = props;
  const [selectedOption, setSelectedOption] = useState<RadiosObj>(radiosArray[0]);

  const handleOptionSelect = (option: RadiosObj) => {
    setSelectedOption(option);
  };

  return (
    <View>
      {radiosArray.map((radioItem) => {
        return <TouchableOpacity onPress={() => handleOptionSelect(radioItem)}>
          <CustomText text={`${selectedOption.label === radioItem.label ? '•' : '○'} ${radioItem.label}`} />
        </TouchableOpacity>
      })}
    </View>
  );
};

export default CustomRadioButton;
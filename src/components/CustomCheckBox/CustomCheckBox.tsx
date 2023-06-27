import React, { useState } from "react";
import { Text, View } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import { CustomCheckBoxType } from "./CustomCheckBox.type";
import { styles } from "./CustomCheckBox.style";
import CustomText from "../CustomText/CustomText";

const CustomCheckBox = (props: CustomCheckBoxType) => {
  const { text, options } = props;

  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      {
        options.map((option, index) => {
          return <View key={index} style={styles.checkboxContainer}>
            <CustomText text={option.label} />
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
              key={`checkBox_${option.id}`}
            />
          </View>
        })
      }
      <CustomText text={text} />
    </View>

  );
};



export default CustomCheckBox;
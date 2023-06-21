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
    <View style={styles.checkboxContainer}>
      {
        options.map((option) => {
          return <>
            <CustomText text={option.label} />
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
              key={option.id}
            />
          </>
        })
      }
      <CustomText text={text} />
    </View>

  );
};



export default CustomCheckBox;
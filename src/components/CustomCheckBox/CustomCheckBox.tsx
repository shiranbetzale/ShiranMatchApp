import React, { useState } from "react";
import { Text, View } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import { CustomCheckBoxType } from "./CustomCheckBox.type";
import { styles } from "./CustomCheckBox.style";

const CustomCheckBox = (props: CustomCheckBoxType ) => {
const {text} = props;

  const [isSelected, setSelection] = useState(false);

  return (
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>{text}</Text>
      </View>

  );
};



export default CustomCheckBox;
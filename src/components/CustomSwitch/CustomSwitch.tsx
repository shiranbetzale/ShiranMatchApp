import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
import CustomText from "../CustomText/CustomText";
import { styles } from "./CustomSwitch.style";
import { CustomSwitchType } from "./CustomSwitch.type";

const CustomSwitch = (props: CustomSwitchType) => {
  const { text } = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <CustomText text={text} />
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}


export default CustomSwitch;
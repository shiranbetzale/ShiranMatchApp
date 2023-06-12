import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./CustomSelect.style";
import SelectDropdown from 'react-native-select-dropdown'
import { CustomSelectType } from "./CustomSelect.type";

const CustomSelect = (props: CustomSelectType) => {
  const { options, onSelect } = props;

  return (
    <View style={styles.container}>
      <SelectDropdown
        data={options.map(option => option.label)}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index)
          onSelect()
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item
        }}
      />
    </View>
  );
}


export default CustomSelect;
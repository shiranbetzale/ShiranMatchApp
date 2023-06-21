import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { styles } from "./CustomDatePicker.style";
import { CustomDatePickerType } from "./CustomDatePicker.type";
import DatePicker from 'react-native-date-picker'
import CustomText from "../CustomText/CustomText";

const CustomDatePicker = (props: CustomDatePickerType) => {
  const { text } = props;
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <View style={styles.container}>
      <CustomText text={text} />
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
          console.log(date);
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      <Text>{date.toISOString()}</Text>
    </View>
  );
}


export default CustomDatePicker;
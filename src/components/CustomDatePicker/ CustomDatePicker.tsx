import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { styles } from "./CustomDatePicker.style";
import { CustomDatePickerType } from "./CustomDatePicker.type";
import DatePicker from 'react-native-date-picker'
import CustomText from "../CustomText/CustomText";
import CustomButton from "../CustomButton/CustomButton";
import { SvgUri } from 'react-native-svg';

const CustomDatePicker = (props: CustomDatePickerType) => {
  const { text } = props;
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <View style={styles.container}>
      <CustomText text={text} />
      <View style={styles.dateContainer}>
        <CustomText text={date.toLocaleDateString("he-IL")} />
        <CustomButton onPress={() => setOpen(true)} >
          {/* <DatePickerSvg /> */}
          <SvgUri
            width="500"
            height="500"
            uri={require("../../images/datePickerSvg.svg")}
          />
        </CustomButton>
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
      </View>
    </View>
  );
}


export default CustomDatePicker;
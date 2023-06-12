
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import CustomCheckBox from '../../components/CustomCheckBox/CustomCheckBox';
import CustomDatePicker from '../../components/CustomDatePicker/ CustomDatePicker';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomRadioButton from '../../components/CustomRadioButton/CustomRadioButton';
import CustomSelect from '../../components/CustomSelect/CustomSelect';
import CustomSwich from '../../components/CustomSwitch/CustomSwitch';
import CustomText from '../../components/CustomText/CustomText';
import { styles } from './MatchForm.style';
import { MatchFormType } from './MatchForm.type';

const MatchForm = () => {//props: MatchFormType
  // const { onPress = () => { }, text } = props;

  return (
    <>
      <CustomInput placeholder={'עד איזה גיל?'} keyboardType={'numeric'} />
      <>
        <CustomInput placeholder={'מאיזה גובה'} keyboardType={'numeric'} />
        <CustomInput placeholder={'עד איזה גובה'} keyboardType={'numeric'} />
      </>

      <>
        <CustomText text={"סוג נייד"} />
        <CustomCheckBox text='כשר' />
        <CustomCheckBox text='מוגן' />
        <CustomCheckBox text='לא מוגן' />
      </>

      <>
        <CustomText text={"סטטוס"} />
        <CustomSelect
          onSelect={() => console.log()}
          options={["רווק", "אלמן", "גרוש", "אלמן +", "גרוש +"]} />
      </>
      {/* במידה ויש ילדים */}
      <CustomInput placeholder={'מספר ילדים'} keyboardType={'numeric'} />
      <>
        <CustomInput placeholder={'שם מלא'} keyboardType={'default'} />
        <CustomInput placeholder={'גיל'} keyboardType={'numeric'} />
      </>
      <>
        <CustomText text={"השקפה"} />
        <CustomSelect
          onSelect={() => console.log()}
          options={["דתי", "חרדי", "חרדי מודרני", "חוזר בתשובה"]} />
      </>
      <>
        <CustomText text={"מעשן?"} />
        <CustomSwich />
      </>
      <>
        <CustomText text={"כהן?"} />
        <CustomSwich />
      </>
      <>
        <CustomText text={"עיסוק"} />
        <CustomSelect
          onSelect={() => console.log()}
          options={["בחור ישיבה", "אברך", "עובד", "סטודנט - לימודים אקדמיים", "חצי עובד חצי לומד - אקדמאי", "חצי עובד חצי לומד"]} />
      </>

      <>
        <CustomText text={"השכלה"} />
        <CustomSelect
          onSelect={() => console.log()}
          options={["תואר", "הנדסאי", "בגרות", "ישיבה"]} />
      </>
      <>
        <CustomText text={"סוג זקן"} />
        <CustomSelect
          onSelect={() => console.log()}
          options={["זקן - שלא נגעו בו", "זקן - מסודר", "זיפים", "מגולח"]} />
      </>
      <CustomInput placeholder={'ישיבה קטנה'} keyboardType={'default'} />
      <CustomInput placeholder={'ישיבה גדולה'} keyboardType={'default'} />
      <CustomInput placeholder={'קיבוץ'} keyboardType={'default'} />

      <CustomInput placeholder={'איזה כולל?'} keyboardType={'default'} />

      <CustomInput placeholder={'במה עוסק?'} keyboardType={'default'} />

      <CustomInput placeholder={'מה לומד?'} keyboardType={'default'} />

      <>
        <CustomText text={"לבוש"} />
        <CustomSelect
          onSelect={() => console.log()}
          options={["שחור לבן", "צבעוני", "צבעוני ובשבת שחור לבן"]} />
      </>
      <>
        <CustomText text={"זרם"} />
        <CustomSelect
          onSelect={() => console.log()}
          options={["חסיד", "ליטאי", "ספרדי"]} />
      </>
      <CustomInput placeholder={'זרם חסידות?'} keyboardType={'default'} />
      <CustomInput placeholder={'עדה?'} keyboardType={'default'} />

    </>
  );
};

export default MatchForm;

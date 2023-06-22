
import React from 'react';
import CustomText from '../../components/CustomText/CustomText';
import MatchForm from '../../components/MatchForm/MatchForm';
import { styles } from './Step2Screen.style';

const Step2Screen = () => {

  return (
    <>
      <CustomText text={"קצת על בן/ת הזוג"} />
      <MatchForm />
    </>
  );
};

export default Step2Screen;


import React from 'react';
import CustomText from '../../components/CustomText/CustomText';
import DetailsForm from '../../components/DetailsForm/DetailsForm';
import { styles } from './Step1Screen.style';

const Step1Screen = () => {

  return (
    <>
      <CustomText text={"קצת עלי"} />
      <DetailsForm />
    </>
  );
};

export default Step1Screen;

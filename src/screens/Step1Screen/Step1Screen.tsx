
import React from 'react';
import { Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import DetailsForm from '../../components/DetailsForm/DetailsForm';
import { styles } from './Step1Screen.style';

const Step1Screen = ({ navigation }: any) => {

  return (
    <>
      <Text>Step 1</Text>
      <DetailsForm />
    </>
  );
};

export default Step1Screen;

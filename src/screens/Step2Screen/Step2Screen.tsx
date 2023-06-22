
import React from 'react';
import { Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import MatchForm from '../../components/MatchForm/MatchForm';
import WhiteCard from '../../components/WhiteCard/WhiteCard';
import { WizardType } from '../../components/Wizard/Wizard.type';
import generateField from '../../utils/GenerateField';
import matchFormArray from '../../utils/MatchFormFields';
import { styles } from './Step2Screen.style';

const Step2Screen = ({ navigation }: any) => {

  return (
    <>
      <Text>Step 2</Text>
      <MatchForm />
    </>
  );
};

export default Step2Screen;

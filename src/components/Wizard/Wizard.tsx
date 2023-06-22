import React, { useState } from 'react';
import { styles } from './Wizard.style';
import { WizardType } from './Wizard.type';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomButton from '../CustomButton/CustomButton';
import CustomText from '../CustomText/CustomText';

const Stack = createNativeStackNavigator();

const Wizard = (props: WizardType) => {
  const { wizardSteps = [] } = props;
  const [wizardStep, setWizarsStep] = useState<number>(1);

  const renderComp = () => {
    const SpecificStep = wizardSteps.find((step) => step.id === wizardStep)?.comp
    return <SpecificStep />;
  }

  return (
    <>
      {
        wizardStep > 1 &&
        < CustomButton text='Prev' onPress={() => { setWizarsStep(wizardStep - 1) }} />
      }
      {
        wizardStep < wizardSteps.length &&
        <CustomButton text='Next' onPress={() => { setWizarsStep(wizardStep + 1) }} />
      }
      <CustomText text={wizardStep} />
      {renderComp()}
    </>
  );
};

export default Wizard;

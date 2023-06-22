import React, { useState } from 'react';
import { styles } from './Wizard.style';
import { WizardType } from './Wizard.type';
import CustomButton from '../CustomButton/CustomButton';
import { View } from 'react-native';

const Wizard = (props: WizardType) => {
  const { wizardSteps = [] } = props;
  const [wizardStep, setWizarsStep] = useState<number>(1);

  const renderComp = () => {
    const SpecificStep = wizardSteps.find((step) => step.id === wizardStep)?.comp
    return <SpecificStep />;
  }

  return (
    <View style={styles.container}>
      {
        wizardStep > 1 &&
        < CustomButton text='Prev' onPress={() => { setWizarsStep(wizardStep - 1) }} />
      }
      {
        wizardStep < wizardSteps.length &&
        <CustomButton text='Next' onPress={() => { setWizarsStep(wizardStep + 1) }} />
      }
      <View style={styles.containerDynamicComp}>
        {renderComp()}
      </View>
    </View>
  );
};

export default Wizard;

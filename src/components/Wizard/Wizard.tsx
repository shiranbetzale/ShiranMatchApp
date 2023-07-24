import React, { useState } from 'react';
import { styles } from './Wizard.style';
import { WizardBtnType, WizardTxtType, WizardType } from './Wizard.type';
import { View } from 'react-native';
import { FontsStyle } from '../../utils/FontsStyle';
import WizardHeader from './WizardHeader';

const Wizard = (props: WizardType) => {
  const { wizardSteps = [] } = props;
  const [wizardStep, setWizarsStep] = useState<number>(1);

  const renderComp = () => {
    const SpecificStep = wizardSteps.find((step) => step.id === wizardStep)?.comp
    return <SpecificStep />;
  }

  const btnAProps: WizardBtnType = {
    isBtnDis: wizardStep <= 1,
    btnTxt: "הקודם",
    btnFunc: () => setWizarsStep(wizardStep - 1)
  }

  const btnBProps: WizardBtnType = {
    isBtnDis: wizardStep >= wizardSteps.length,
    btnTxt: "הבא",
    btnFunc: () => setWizarsStep(wizardStep + 1)
  }

  const txtProps: WizardTxtType = {
    customStyle: FontsStyle.title,
    text: wizardSteps.find((step) => step.id === wizardStep)?.title
  }

  return (
    <View style={styles.container}>
      <WizardHeader
        btnAProps={btnAProps}
        btnBProps={btnBProps}
        textProps={txtProps}
      />
      <View style={styles.containerDynamicComp}>
        {renderComp()}
      </View>
    </View>
  );
};

export default Wizard;

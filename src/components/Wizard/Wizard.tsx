import React, { useState } from 'react';
import { styles } from './Wizard.style';
import { WizardBtnType, WizardTxtType, WizardType } from './Wizard.type';
import { View, ScrollView } from 'react-native';
import { FontsStyle } from '../../utils/FontsStyle';
import WizardHeader from './WizardHeader';
import CustomImageBg from '../CustomImageBg/CustomImageBg';

const Wizard = (props: WizardType) => {
  const { wizardSteps = [] } = props;
  const [wizardStep, setWizarsStep] = useState<number>(1);

  const image = "../../images/bg2.jpg";

  const renderComp = () => {
    const SpecificStep = wizardSteps.find((step) => step.id === wizardStep)?.comp
    return <SpecificStep />;
  }

  const btnAProps: WizardBtnType = {
    btnDis: wizardStep <= 1,
    btnTxt: "הקודם",
    btnFunc: () => setWizarsStep(wizardStep - 1)
  }

  const btnBProps: WizardBtnType = {
    btnDis: wizardStep >= wizardSteps.length,
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
      <CustomImageBg
        src={require(image)}
        customImgStyle={styles.image}
      >
        <View style={styles.containerDynamicComp}>
          {renderComp()}
        </View>
      </CustomImageBg>
    </View>
  );
};

export default Wizard;

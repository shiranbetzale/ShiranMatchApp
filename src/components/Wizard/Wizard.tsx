import React, { useState } from 'react';
import { styles } from './Wizard.style';
import { WizardType } from './Wizard.type';
import CustomButton from '../CustomButton/CustomButton';
import { ImageBackground, View, ScrollView } from 'react-native';

const Wizard = (props: WizardType) => {
  const { wizardSteps = [] } = props;
  const [wizardStep, setWizarsStep] = useState<number>(1);

  const image = "../../images/bg2.jpg";

  const renderComp = () => {
    const SpecificStep = wizardSteps.find((step) => step.id === wizardStep)?.comp
    return <SpecificStep />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.wizardContainer}>
        <CustomButton
          disabled={wizardStep <= 1}
          text='הקודם'
          onPress={() => { setWizarsStep(wizardStep - 1) }}
          customStyle={styles.btn}
        />
        <CustomButton
          disabled={wizardStep >= wizardSteps.length}
          text='הבא'
          onPress={() => { setWizarsStep(wizardStep + 1) }}
          customStyle={styles.btn}
        />
      </View>
      <ImageBackground
        source={require(image)}
        resizeMode="cover"
        style={styles.image}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View style={styles.containerDynamicComp}>
            {renderComp()}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Wizard;

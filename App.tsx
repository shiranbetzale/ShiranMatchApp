import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Wizard from './src/components/Wizard/Wizard';
import Step1Screen from './src/screens/Step1Screen/Step1Screen';
import Step2Screen from './src/screens/Step2Screen/Step2Screen';
import Step3Screen from './src/screens/Step3Screen/Step3Screen';

const App = () => {
  const wizardSteps = [
    { id: 1, name: "Step1", title: "קצת עלי", comp: Step1Screen },
    { id: 2, name: "Step2", title: "על בן/ת הזוג", comp: Step2Screen },
    { id: 3, name: "Step3", title: "העלאת תמונוץ", comp: Step3Screen }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Wizard wizardSteps={wizardSteps} />
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
});

export default App;

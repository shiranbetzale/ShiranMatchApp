import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Wizard from './src/components/Wizard/Wizard';
import Step1Screen from './src/screens/Step1Screen/Step1Screen';
import Step2Screen from './src/screens/Step2Screen/Step2Screen';
import Step3Screen from './src/screens/Step3Screen/Step3Screen';

const App = () => {
  const wizardSteps = [
    { id: 1, name: "Step1", comp: Step1Screen },
    { id: 2, name: "Step2", comp: Step2Screen },
    { id: 3, name: "Step3", comp: Step3Screen }
  ]

  const image = "./src/images/bg2.jpg";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ImageBackground source={require(image)} resizeMode="repeat" style={styles.image}>
          <Wizard wizardSteps={wizardSteps} />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;

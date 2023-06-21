import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DetailsForm from '../../screens/DetailsForm/DetailsForm';
import MatchForm from '../../screens/MatchForm/MatchForm';
import CustomButtom from '../CustomButton/CustomButton';
import { styles } from './Wizard.style';
import { WizardType } from './Wizard.type';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Wizard = (props: WizardType) => {
  // const { } = props;
  const Stack = createStackNavigator();

  // const [currentStep, setCurrentStep] = useState(1);

  // const handleNext = () => {
  //   setCurrentStep(currentStep + 1);
  // };

  // const handlePrevious = () => {
  //   setCurrentStep(currentStep - 1);
  // };

  // const renderStepContent = () => {
  //   switch (currentStep) {
  //     case 1:
  //       return <DetailsForm />;
  //     case 2:
  //       return <MatchForm />;
  //     case 3:
  //       return <Text >Step 3 content</Text>;
  //     default:
  //       return null;
  //   }
  // };

  return (
    // <>
    //   <View style={styles.buttonContainer}>
    //     {currentStep > 1 && (
    //       <CustomButtom customStyle={styles.btn} text="הקודם" onPress={handlePrevious} />
    //     )}
    //     {currentStep < 3 && (
    //       <CustomButtom text="הבא" customStyle={styles.btn} onPress={handleNext} />
    //     )}
    //   </View>
    //   {renderStepContent()}
    // </>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Step1" component={DetailsForm} />
        <Stack.Screen name="Step2" component={MatchForm} />
        {/* <Stack.Screen name="Step3" component={Step3Screen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Wizard;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CustomButtom from './src/components/CustomButtom/CustomButtom';
import CustomCheckBox from './src/components/CustomCheckBox/CustomCheckBox';
import CustomInput from './src/components/CustomInput/CustomInput';
import CustomSwich from './src/components/CustomSwich/CustomSwich';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';



  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <CustomCheckBox text="CustomCheckBox" />
        <CustomButtom text="CustomButtom" onPress={() => { }} />
        <CustomInput placeholder={'CustomInput'} keyboardType={'default'} />
        <CustomInput placeholder={'CustomInput'} keyboardType={'default'} multiline={true} />
        <CustomSwich />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

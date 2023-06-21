import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Wizard from './src/components/Wizard/Wizard';

import DetailsForm from './src/screens/DetailsForm/DetailsForm';
import MatchForm from './src/screens/MatchForm/MatchForm';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {/* <DetailsForm /> */}
        {/* <MatchForm /> */}
        <Wizard />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red"
  },
});

export default App;

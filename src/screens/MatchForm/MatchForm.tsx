
import React from 'react';
import { View } from 'react-native';
import CustomButtom from '../../components/CustomButton/CustomButton';
import WhiteCard from '../../components/WhiteCard/WhiteCard';
import { WizardType } from '../../components/Wizard/Wizard.type';
import generateField from '../../utils/GenerateField';
import matchFormArray from '../../utils/MatchFormFields';
import { styles } from './MatchForm.style';

const MatchForm = (props: WizardType) => {
  const { navigation } = props;

  return (
    <>
      <View>
        {/* <Text>Step 1</Text> */}
        <CustomButtom
          text="Next"
          onPress={() => navigation.navigate('')}
        />
      </View>
      {
        matchFormArray.map((field, index) => {
          return <WhiteCard key={index} customStyle={styles.container}>
            {generateField(field)}
          </WhiteCard>
        })
      }
    </>
  );
};

export default MatchForm;

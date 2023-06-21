
import React from 'react';
import { View } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import WhiteCard from '../../components/WhiteCard/WhiteCard';
import { WizardType } from '../../components/Wizard/Wizard.type';
import detailsFormArray from '../../utils/DetailsFormFields';
import generateField from '../../utils/GenerateField';
import { styles } from './DetailsForm.style';

const DetailsForm = (props: WizardType) => {//props: DetailsFormType
  const { navigation } = props;

  return (
    <>
      <View>
        <CustomButton
          text="Next"
          onPress={() => navigation.navigate('Step3')}
        />
        <CustomButton
          text="Previous"
          onPress={() => navigation.navigate('Step1')}
        />
      </View>
      {
        detailsFormArray.map((field, index) => {
          return <WhiteCard key={index} customStyle={styles.container}>
            {generateField(field)}
          </WhiteCard>
        })
      }
    </>

    // {/* במידה ויש ילדים */}
    // <>
    //   <CustomInput placeholder={'שם מלא'} keyboardType={'default'} />
    //   <CustomInput placeholder={'גיל'} keyboardType={'numeric'} />
    //
  );
};

export default DetailsForm;

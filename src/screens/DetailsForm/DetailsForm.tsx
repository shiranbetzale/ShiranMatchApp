
import React from 'react';
import WhiteCard from '../../components/WhiteCard/WhiteCard';
import { detailsFormArray } from '../../utils/DetailsFormFields';
import generateField from '../../utils/GenerateField';
import { styles } from './DetailsForm.style';

const DetailsForm = () => {//props: DetailsFormType
  // const { onPress = () => { }, text } = props;

  return (
    <>
      {
        detailsFormArray.map((field) => {
          return <WhiteCard customStyle={styles.container}>
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

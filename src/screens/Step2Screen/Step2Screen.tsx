
import React from 'react';
import { styles } from './Step2Screen.style';
import generateField from '../../utils/GenerateField';
import matchFormArray from '../../utils/MatchFormFields';
import WhiteCard from '../../components/WhiteCard/WhiteCard';

const Step2Screen = () => {

  return (
    <>
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

export default Step2Screen;

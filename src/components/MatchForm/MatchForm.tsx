
import React from 'react';
import WhiteCard from '../../components/WhiteCard/WhiteCard';
import generateField from '../../utils/GenerateField';
import matchFormArray from '../../utils/MatchFormFields';
import { styles } from './MatchForm.style';

const MatchForm = () => {
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

export default MatchForm;


import React, { useState } from 'react';
import WhiteCard from '../../components/WhiteCard/WhiteCard';
import detailsFormArray from '../../utils/DetailsFormFields';
import { FormField, Option } from '../../utils/FormFields.type';
import generateField from '../../utils/GenerateField';
import { styles } from './DetailsForm.style';

const DetailsForm = () => {
  const [detailsFormArrayFiltered, setDetailsFormArrayFiltered] = useState<FormField[]>(detailsFormArray);

  const handlePress = (option?: Option) => {
    const detailsFormArrayAfterFilter = detailsFormArray.filter((item: FormField) => {
      if (item.condition?.length) {
        return item.condition.find((itemCondition) => {
          return itemCondition.fieldId === option?.name && itemCondition.value === option?.id.toString()
        })
      }
      // if (item.options?.length) {
      //   return item.options.find((itemOptionCondition) => {
      //     if (itemOptionCondition.isShow?.length) {
      //       return itemOptionCondition?.isShow.filter((itemOption) => {
      //         return itemOption.fieldId === option?.name && itemOptionCondition.value === option?.id.toString()
      //       })
      //     }
      //     else {
      //       return itemOptionCondition;
      //     }
      //   })
      // }
      else {
        return item;
      }
    });

    setDetailsFormArrayFiltered(detailsFormArrayAfterFilter);
  }

  return (
    <>
      {
        detailsFormArrayFiltered.map((field, index) => {
          return <WhiteCard key={index} customStyle={styles.container}>
            {generateField({ ...field, handlePress })}
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

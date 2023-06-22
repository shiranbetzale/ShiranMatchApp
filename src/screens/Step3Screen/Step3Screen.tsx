
import React from 'react';
import { Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomText from '../../components/CustomText/CustomText';
import UploadPictures from '../../components/UploadPictures/UploadPictures';

const Step3Screen = ({ navigation }: any) => {

  return (
    <>
      <Text>Step 3</Text>
      <UploadPictures />
    </>
  );
};

export default Step3Screen;

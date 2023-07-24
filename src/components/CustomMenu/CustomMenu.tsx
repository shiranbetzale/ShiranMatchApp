import React from 'react';
import { View } from 'react-native';
import MenuSvg from '../../images/MenuSvg';
import CustomButton from '../CustomButton/CustomButton';
import { styles } from './CustomMenu.style';
import { CustomMenuType } from './CustomMenu.type';

const CustomMenu = (props: CustomMenuType) => {
  const { } = props;

  return (
    <View style={styles.container}>
    <CustomButton onPress={() => { }} customStyle={styles.menuBtn}>
      <MenuSvg />
    </CustomButton>
    </View>
  );
};

export default CustomMenu;

import React from 'react';
import { ImageBackground, View } from 'react-native';
import CustomImageBg from '../CustomImageBg/CustomImageBg';
import WhiteCard from '../WhiteCard/WhiteCard';
import { styles } from './MatchCard.style';
import { MatchCardType } from './MatchCard.type';

const MatchCard = (props: MatchCardType) => {
  const { } = props;
  const image = "../../images/bg2.jpg";

  return (
    <View >
      <CustomImageBg src={require(image)}
      />
      <WhiteCard>

      </WhiteCard>
    </View>
  );
};

export default MatchCard;

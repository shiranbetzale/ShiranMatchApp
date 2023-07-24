
import React from 'react';
import { ScrollView, View } from 'react-native';
import CurrentCard from '../../components/CurrentCard/CurrentCard';
import MatchCard from '../../components/MatchCard/MatchCard';
import { MatchCardType } from '../../components/MatchCard/MatchCard.type';
import { styles } from './MatchCardsScreen.style';
import { MatchCardsScreenType } from './MatchCardsScreen.type';

const MatchCardsScreen = (props: MatchCardsScreenType) => {
  const { matchArray } = props;

  const currCard: MatchCardType = {
    gender: "נקבה",
    name: "XXX",
    age: 32,
    height: "1.57",
    status: "אלמן",
    numOfChildren: 5,
    image: "https://www.shutterstock.com/image-photo/origami-3d-image-career-woman-600w-2290557303.jpg"
  }

  return (
    <View style={styles.container}>
      <CurrentCard {...currCard} />
      <ScrollView style={styles.svContainer}>
        {matchArray.map((matchItem: MatchCardType, index) => {
          return <MatchCard {...matchItem} key={index} />
        })}
      </ScrollView>
    </View>
  );
};

export default MatchCardsScreen;





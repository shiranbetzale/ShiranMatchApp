
import React from 'react';
import { ScrollView, View } from 'react-native';
import MatchCard from '../../components/MatchCard/MatchCard';
import { MatchCardType } from '../../components/MatchCard/MatchCard.type';
import { styles } from './AllCardsScreen.style';
import { AllCardsScreenType } from './AllCardsScreen.type';

const AllCardsScreen = (props: AllCardsScreenType) => {
  const { allCardsArray } = props;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.svContainer}>
        {allCardsArray.map((matchItem: MatchCardType, index) => {
          return <MatchCard {...matchItem} key={index} />
        })}
      </ScrollView>
    </View>
  );
};

export default AllCardsScreen;





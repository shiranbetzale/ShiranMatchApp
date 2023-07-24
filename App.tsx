import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import CustomImageBg from './src/components/CustomImageBg/CustomImageBg';
import CustomMenu from './src/components/CustomMenu/CustomMenu';
import { MatchCardType } from './src/components/MatchCard/MatchCard.type';
import Wizard from './src/components/Wizard/Wizard';
import AllCardsScreen from './src/screens/AllCardsScreen/AllCardsScreen';
import MatchCardsScreen from './src/screens/MatchCardsScreen/MatchCardsScreen';
import MatchCards from './src/screens/MatchCardsScreen/MatchCardsScreen';
import Step1Screen from './src/screens/Step1Screen/Step1Screen';
import Step2Screen from './src/screens/Step2Screen/Step2Screen';
import Step3Screen from './src/screens/Step3Screen/Step3Screen';

const App = () => {
  const wizardSteps = [
    { id: 1, name: "Step1", title: "קצת עלי", comp: Step1Screen },
    { id: 2, name: "Step2", title: "על בן/ת הזוג", comp: Step2Screen },
    { id: 3, name: "Step3", title: "העלאת תמונוץ", comp: Step3Screen }
  ];

  const arr: MatchCardType[] = [
    { name: "XXX", gender: "זכר", age: 50, numOfChildren: 0, height: "1.85", status: "גרוש", image: "https://www.shutterstock.com/image-photo/3d-image-male-character-attacking-600w-2274399929.jpg" },
    { name: "XXX", gender: "נקבה", age: 54, numOfChildren: 0, height: "1.80", status: "אלמן", image: "https://www.shutterstock.com/image-photo/milk-chocolate-splash-smooth-abstract-600w-2259581367.jpg" },
    { name: "XXX", gender: "נקבה", age: 50, numOfChildren: 0, height: "1.85", status: "רווק", image: "https://www.shutterstock.com/image-photo/origami-3d-image-graphic-600w-2284548165.jpg" },
    { name: "XXX", gender: "נקבה", age: 54, numOfChildren: 0, height: "1.80", status: "גרוש", image: "https://www.shutterstock.com/image-photo/cartoon-3d-icon-thai-tuk-600w-2251713231.jpg" },
    { name: "XXX", gender: "נקבה", age: 50, numOfChildren: 0, height: "1.85", status: "גרוש", image: "https://www.shutterstock.com/image-photo/3d-image-male-character-attacking-600w-2274399929.jpg" },
    { name: "XXX", gender: "זכר", age: 54, numOfChildren: 0, height: "1.80", status: "אלמן", image: "https://www.shutterstock.com/image-photo/milk-chocolate-splash-smooth-abstract-600w-2259581367.jpg" },
    { name: "XXX", gender: "זכר", age: 50, numOfChildren: 0, height: "1.85", status: "רווק", image: "https://www.shutterstock.com/image-photo/origami-3d-image-graphic-600w-2284548165.jpg" },
    { name: "XXX", gender: "זכר", age: 54, numOfChildren: 0, height: "1.80", status: "רווק", image: "https://www.shutterstock.com/image-photo/cartoon-3d-icon-thai-tuk-600w-2251713231.jpg" }
  ];

  const allCardsArr: MatchCardType[] = [
    { name: "XXX", gender: "זכר", age: 50, height: "1.85", status: "גרוש", numOfChildren: 0, image: "https://www.shutterstock.com/image-photo/3d-image-male-character-attacking-600w-2274399929.jpg" },
    { name: "XXX", gender: "נקבה", age: 54, height: "1.80", status: "אלמן", numOfChildren: 1, image: "https://www.shutterstock.com/image-photo/milk-chocolate-splash-smooth-abstract-600w-2259581367.jpg" },
    { name: "XXX", gender: "נקבה", age: 50, height: "1.85", status: "רווק", numOfChildren: 5, image: "https://www.shutterstock.com/image-photo/origami-3d-image-graphic-600w-2284548165.jpg" },
    { name: "XXX", gender: "נקבה", age: 54, height: "1.80", status: "גרוש", numOfChildren: 0, image: "https://www.shutterstock.com/image-photo/cartoon-3d-icon-thai-tuk-600w-2251713231.jpg" },
    { name: "XXX", gender: "נקבה", age: 50, height: "1.85", status: "גרוש", numOfChildren: 0, image: "https://www.shutterstock.com/image-photo/3d-image-male-character-attacking-600w-2274399929.jpg" },
    { name: "XXX", gender: "זכר", age: 54, height: "1.80", status: "אלמן", numOfChildren: 0, image: "https://www.shutterstock.com/image-photo/milk-chocolate-splash-smooth-abstract-600w-2259581367.jpg" },
    { name: "XXX", gender: "זכר", age: 50, height: "1.85", status: "רווק", numOfChildren: 0, image: "https://www.shutterstock.com/image-photo/origami-3d-image-graphic-600w-2284548165.jpg" },
    { name: "XXX", gender: "זכר", age: 54, height: "1.80", status: "רווק", numOfChildren: 0, image: "https://www.shutterstock.com/image-photo/cartoon-3d-icon-thai-tuk-600w-2251713231.jpg" }
  ];

  const image = require("./src/images/bg2.jpg");

  return (
    <SafeAreaView style={styles.container}>
      <CustomMenu />
      <CustomImageBg
        src={image}
        customImgStyle={styles.image}
      >
        {/* <Wizard wizardSteps={wizardSteps} /> */}
        {/* <AllCardsScreen allCardsArray={allCardsArr} /> */}
        <MatchCardsScreen matchArray={arr} />
      </CustomImageBg>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    alignItems: "center",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
});

export default App;

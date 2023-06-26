import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  wizardContainer: {
    backgroundColor: Colors.darkGreen,
    width: '100%',
    borderBottomWidth: 1,
    alignItems: "flex-end",
    // ...Colors.Shadow,
  },
  containerDynamicComp: {
    flex: 1,
    alignItems: "flex-end",
    width: '100%'
  },
  image: {
    width: '100%'
  },
  btn: {
    // width: 200,
    // flexDirection: "column-reverse",
  }
});

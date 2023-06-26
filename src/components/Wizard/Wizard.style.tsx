import { Dimensions, StyleSheet } from 'react-native';
import Colors from '../../utils/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  wizardContainer: {
    width: '100%',
    borderBottomWidth: 1,
    justifyContent: "space-between",
    flexDirection: "row-reverse",
    alignItems: "center",
    padding: 10,
    backgroundColor: Colors.darkGreen,
  },
  btn: {
  },
  containerDynamicComp: {
    alignItems: "stretch",
    width: '100%'
  },
  image: {
    alignItems: "center",
    width: Dimensions.get("screen").width,
    minHeight: Dimensions.get("screen").height,
  },
});

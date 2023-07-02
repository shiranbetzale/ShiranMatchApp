import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  rangeContainer: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
    width: "100%",
    marginTop: 10
  },
  range: {
    marginHorizontal: 20
  },
  markerStyle: {
    backgroundColor: Colors.border
  },
  pressedMarkerStyle: {
    backgroundColor: Colors.btn
  },
  selectedStyle: {
    backgroundColor: Colors.black
  }
});

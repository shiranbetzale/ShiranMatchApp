import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

export const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  btn: {
    marginTop: 5
  },
  optionsContainer: {
    alignContent: "center",
    flexDirection: "row-reverse",
    alignItems: "center"
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.white,
    marginLeft: 10,
    borderColor: Colors.black,
    borderWidth: 1,
  },
  selectedCircle: {
    backgroundColor: Colors.green,
  }
});
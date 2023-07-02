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
    alignItems: "center",
    marginBottom: 10
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.white,
    marginLeft: 10,
    borderColor: Colors.black,
    borderWidth: 2,
  },
  selectedCircle: {
    backgroundColor: Colors.border,
  }
});
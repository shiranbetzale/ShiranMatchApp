import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

export const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 5,
    marginRight: 10,
    borderWidth: 1,
    padding: 10,
    width: 120,
    borderColor: Colors.btn
  },
  textArea: {
    height: 140,
    width: "100%",
    marginRight: 0
  },
  container: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textAreaContainer: {
    alignItems: "flex-end",
    flexDirection: "column",
  }
});
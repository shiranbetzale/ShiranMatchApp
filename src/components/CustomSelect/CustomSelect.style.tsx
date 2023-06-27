import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row-reverse",
  },
  dropdownRow: {
    backgroundColor: Colors.border,
  },
  select: {
    marginLeft: 10
  }
});
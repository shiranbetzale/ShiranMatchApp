import { StyleSheet } from "react-native";
import Colors from "./Colors";

const fontFamily = {
    extraBold: "ExtraBold",
    semiBold: "SemiBold",
    bold: "Medium",
    regular: "Regular",
    light: "Light",
};

export const FontsStyle = StyleSheet.create({
    title: {
        fontFamily: fontFamily.bold,
        color: Colors.btn,
        fontSize: 24,
    },
    text: {
        fontFamily: fontFamily.regular,
        textAlign: "right",
        color: Colors.black,
        fontSize: 16,
    }
});

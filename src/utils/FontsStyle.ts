import { StyleSheet } from "react-native";

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
        fontSize: 24,
    },
    text: {
        fontFamily: fontFamily.regular,
        fontSize: 18,
    }
});

import { StyleSheet } from "react-native";
import Colors from "./Colors";

const fontFamily = {
    medium: "IBMPlexSansHebrew-Medium",
    semiBold: "IBMPlexSansHebrew-SemiBold",
    bold: "IBMPlexSansHebrew-Medium",
    regular: "IBMPlexSansHebrew-Regular",
    light: "IBMPlexSansHebrew-Light",
};

export const FontsStyle = StyleSheet.create({
    title: {
        fontFamily: fontFamily.semiBold,
        color: Colors.btn,
        fontSize: 24,
    },
    subTitle: {
        fontFamily: fontFamily.bold,
        textAlign: "right",
        color: Colors.black,
        fontSize: 16,
    },
    text: {
        fontFamily: fontFamily.regular,
        textAlign: "right",
        color: Colors.black,
        fontSize: 16,
    }
});

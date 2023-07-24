import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors';
import GeneralStyle from '../../utils/GeneralStyle';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lightBrown,
        alignItems: "flex-end",
        padding: GeneralStyle.space
    },
    menuBtn: {
        width: 35,
        height: 35,
        backgroundColor: Colors.transparent,
        borderWidth: 2,
        justifyContent: "center",
    }
});

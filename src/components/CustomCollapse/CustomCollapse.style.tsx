import { Dimensions, StyleSheet } from 'react-native';
import Colors from '../../utils/Colors';

export const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    collapseBtn: {
        alignItems: "flex-end",
        width: Dimensions.get("screen").width - 40,
        marginBottom: 10,
        opacity: 0.85,
        borderColor: Colors.black,
        borderWidth: 1,
    }
});

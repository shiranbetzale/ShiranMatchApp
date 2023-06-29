import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors';
import colors from '../../utils/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 4,
    paddingHorizontal: 15,
    paddingVertical: 10,
    ...Colors.Shadow,
    opacity: 0.85,
  }
});

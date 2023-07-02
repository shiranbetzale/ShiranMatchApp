import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: Colors.lightBrown,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  disabled: {
    opacity: 0.3
  }
});

import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    height: 54 + getStatusBarHeight(true),
    paddingTop: getStatusBarHeight(true),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
    marginBottom: 20,
  },
  title: {
    color: colors.green,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darker,
  },
  subtitle: {
    fontSize: 20,
    color: colors.white,
    alignSelf: 'center',
  },
  loading: {
    marginTop: metrics.baseMargin,
  },
});

export default styles;

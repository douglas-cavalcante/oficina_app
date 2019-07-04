import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: metrics.basePadding,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin * 2,
  },
  infoContainer: {
    flexDirection: 'column',
  },
  sellerText: {
    fontSize: 16,
  },
  customerText: {
    fontSize: 14,
    color: colors.secundary,
  },
  badge: {
    backgroundColor: '#57B23F',
    padding: 10,
    borderRadius: 5,
  },
  valueText: {
    fontSize: 16,
    color: colors.white,
  },
});

export default styles;

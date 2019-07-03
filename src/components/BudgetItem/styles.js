import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  sellerText: {
    fontSize: 16,
  },
  customerText: {
    fontSize: 14,
    color: '#CCC',
  },
  badge: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  valueText: {
    fontSize: 16,
  },
  info: {
    flexDirection: 'column',
  },
});

export default styles;

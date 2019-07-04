import { StyleSheet } from 'react-native';
import { metrics } from '../../styles';

const styles = StyleSheet.create({
  containerModal: {
    height: 100,
    width: metrics.screenWidth - 40,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowRadius: 10,
    backgroundColor: '#FFF',
  },
  description: {
    fontSize: 14,
  },
});

export default styles;

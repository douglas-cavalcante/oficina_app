import React from 'react';
import { View, Text, Button } from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import styles from './styles';

const ModalItem = ({ visible, budgetDescription, toggleModal }) => (
  <Modal
    isVisible={visible}
    onBackdropPress={() => toggleModal('')}
    onBackButtonPress={() => toggleModal('')}
  >
    <View style={styles.containerModal}>
      <Text style={styles.description}>{budgetDescription}</Text>
      <Button title="Fechar" onPress={() => toggleModal('')} />
    </View>
  </Modal>
);

ModalItem.propTypes = {
  visible: PropTypes.bool.isRequired,
  budgetDescription: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ModalItem;

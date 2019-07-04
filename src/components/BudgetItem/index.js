import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const BudgetItem = ({ budget, toggleModal }) => (
  <TouchableOpacity style={styles.container} onPress={() => toggleModal(budget.description)}>
    <View style={styles.infoContainer}>
      <Text style={styles.sellerText}>{budget.seller}</Text>
      <Text style={styles.sellerCustomer}>{budget.customer}</Text>
    </View>
    <View style={styles.badge}>
      <Text style={styles.valueText}>{budget.value}</Text>
    </View>
  </TouchableOpacity>
);

BudgetItem.propTypes = {
  budget: PropTypes.shape({
    seller: PropTypes.string,
    customer: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default BudgetItem;

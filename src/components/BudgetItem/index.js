import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const BudgetItem = ({ budget }) => (
  <TouchableOpacity style={styles.container} onPress={() => {}}>
    <View style={styles.info}>
      <Text style={styles.sellerText}>{budget.seller}</Text>
      <Text style={styles.sellerCustomer}>{budget.customer}</Text>
    </View>
    <Text style={styles.sellerValue}>{budget.value}</Text>
  </TouchableOpacity>
);

export default BudgetItem;

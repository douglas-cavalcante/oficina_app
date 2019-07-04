import React from 'react';
import {
  View, FlatList, ActivityIndicator, Text, Alert,
} from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import api from '../../services/api';
import ModalItem from '../../components/Modal';
import BudgetItem from '../../components/BudgetItem';

export default class Main extends React.Component {
  state = {
    budgets: [],
    loading: true,
    refreshing: false,
    isModalVisible: false,
    budgetDescription: '',
  };

  componentDidMount() {
    this.getBudgets();
  }

  toggleModal = (budgetDescription = '') => {
    const { isModalVisible } = this.state;
    this.setState({ isModalVisible: !isModalVisible, budgetDescription });
  };

  getBudgets = async () => {
    this.setState({ refreshing: true });
    try {
      const { data } = await api.get('/proposals');
      this.setState({ budgets: data, loading: false, refreshing: false });
    } catch (error) {
      this.setState({ loading: false, refreshing: false });
      Alert.alert('Houve um erro. Entre em contato com o suporte.');
    }
  };

  renderListItem = ({ item }) => <BudgetItem budget={item} toggleModal={this.toggleModal} />;

  renderList = () => {
    const { budgets, refreshing } = this.state;
    return (
      <FlatList
        data={budgets}
        keyExtractor={budget => String(budget.id)}
        renderItem={this.renderListItem}
        onRefresh={this.getBudgets}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { loading, isModalVisible, budgetDescription } = this.state;
    return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.subtitle}>Acompanhamento de Orçamentos</Text>
        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
        <ModalItem
          visible={isModalVisible}
          budgetDescription={budgetDescription}
          toggleModal={this.toggleModal}
        />
      </View>
    );
  }
}

import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import BudgetItem from '../../components/BudgetItem';
import api from '../../services/api';

export default class Main extends React.Component {
  state = {
    budgets: [
      {
        id: 1,
        seller: 'Joaquim Silva',
        customer: 'Thiago Alberto',
        description: 'Rebinboca da parafuseta',
        value: 'R$ 120,00',
      },
    ],
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.getBudgets();
  }

  getBudgets = async () => {
    try {
      const { data } = await api.get('/proposals');
      this.setState({ budgets: data, loading: false });
    } catch (error) {
      console.log(error);
    }
  };

  renderListItem = ({ item }) => <BudgetItem budget={item} />;

  renderList = () => {
    const { budgets, refreshing } = this.state;
    return (
      <FlatList
        data={budgets}
        keyExtractor={budget => String(budget.id)}
        renderItem={this.renderListItem}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        <Header />
        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}

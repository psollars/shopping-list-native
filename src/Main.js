import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import ShoppingCart from './ShoppingCart';
import AddNewItem from './AddNewItem';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{name: "thing", price: "1"}, {name: "thing", price: "2"}]
    };
  }
  
  render() {
    //const {items} = this.state;
    return (
      <View style={styles.container}>
        <ShoppingCart style={styles.cart} items={this.state.items} removeItem={this.removeItem} />
        <AddNewItem onSubmit={this.addToCart} />
      </View>
    );
  }

  addToCart = (item) => {
    this.setState((prevState) => {
      const newItems = prevState.items.slice(0);
      newItems.push(item)
      return { items: newItems };
    });
  };

  removeItem = (index) => {
    this.setState(prevState => {
      const newItems = prevState.items.slice(0);
      newItems.splice(index, 1);
      return { items: newItems };
    });
  };

} //end of component

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});

export default Main;

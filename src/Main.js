import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ShoppingCart from './ShoppingCart';
import AddNewItem from './AddNewItem';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  
  render() {
    return (
      <View className="app">
        <ShoppingCart items={this.state.items} onDelete={(index) => this.removeItem(index)} />
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
    // this.setState(prevState => {
    //   const newItems = prevState.items.slice(0);
    //   newItems.splice(index, 1);
    //   return { items: newItems };
    // });
  };

} //end of component
import React, { Component } from 'react';
import ShoppingCartItem from "./ShoppingCartItem";
import { StyleSheet, View, Text } from 'react-native';

class ShoppingCart extends Component {
  render() {

    let shoppingCartTotal = 0;
    
    const ItemsInCart = this.props.items.map((item, index) => {
        if (Number.isNaN(Number(item.price))) {
          item.price = 0;
        }
        shoppingCartTotal += Number(item.price);
      return <ShoppingCartItem key={index} id={index} item={item} removeItem={this.props.removeItem}/>;
    });

    return (
      <View style={styles.container}>
        <View>{ItemsInCart}</View>
        <View style={styles.total}>
         <Text>Total ${shoppingCartTotal}</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderTopWidth: .5,
    borderTopColor: '#000'
  }
});

export default ShoppingCart;

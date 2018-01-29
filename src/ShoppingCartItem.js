import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ShoppingCartItem = (props) => {
  console.log(props);
    return (
      <View style={styles.container}>
        <Text style={styles.text} onPress={() => props.removeItem(props.id)}>X</Text>
        <Text style={styles.text}>{props.item.name}</Text>
        <Text style={styles.text}>{props.item.price}</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10
  },
  text: {
    fontSize: 22
  }
});

export default ShoppingCartItem;

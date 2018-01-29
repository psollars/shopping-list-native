import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ShoppingCartItem = (props) => {
  console.log(props);
    return (
      <View style={styles.container}>
        <Text style={[ styles.text, {width: 20, color: '#999'} ]} onPress={() => props.removeItem(props.id)}>x</Text>
        <View style={styles.item}>
          <Text style={styles.text}>{props.item.name}</Text>
          <Text style={styles.text}>{props.item.price}</Text>
        </View>
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
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 22
  }
});

export default ShoppingCartItem;

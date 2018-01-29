import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Text, TextInput, Button } from 'react-native';

class AddNewItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Item</Text>
          <TextInput style={styles.input} placeholder="item name" value={this.state.name} onChangeText={(name) => this.setState({name})} />
        <Text>Price $</Text>
          <TextInput style={styles.input} placeholder="item price" keyboardType="numeric" value={this.state.price} onChangeText={(price) => this.setState({price})} />
        <View>
          <Button onPress={this.handleSubmit} title="Add" type="submit" />
        </View>
      </View>
    );
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state);
    this.setState({
      name: "",
      price: ""
    })
  };

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    fontSize: 22,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    padding: 10
  }
});

export default AddNewItem;

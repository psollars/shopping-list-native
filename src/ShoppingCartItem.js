import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ShoppingCartItem extends Component {

	render() {
		return (
			<View className="cart__item">
				<View>
					<View className="cart__remove" onClick={this.props.callback}>
						<Text>X</Text>
					</View>
					<View className="cart__itemname">
						<Text>{this.props.item.name}</Text>
					</View>
				</View>
				<View className="cart__price">
					<Text>{this.props.item.price}</Text>
				</View>
		  </View>
		);
  }
}

export default ShoppingCartItem;

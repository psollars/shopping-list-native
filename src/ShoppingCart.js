import React, { Component } from 'react';
import ShoppingCartItem from "./ShoppingCartItem";
import { View, Text } from 'react-native';

class ShoppingCart extends Component {
	render() {

		let shoppingCartTotal = 0;
		
		const ItemsInCart = this.props.items.map((item, index) => {
			shoppingCartTotal += Number(item.price);
			return <ShoppingCartItem key={index} item={item} callback={() => this.props.onDelete(index)}/>;
		});

		return (
			<View className="app__cart">
				<View className="cart">
					{ItemsInCart}
					<View className="cart__total">
						<View><Text>Total:</Text></View>
						<View><Text>{shoppingCartTotal}</Text></View>
					</View>
				</View>
			</View>
		);
	}

}

export default ShoppingCart;

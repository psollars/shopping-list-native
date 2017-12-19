import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

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
			<View className="add__form">
				<Text>Item</Text>
					<TextInput type="text" className="add__input" value={this.state.name} onChangeText={this.handleNameEvent} />
				<Text>Price $</Text>
					<TextInput type="number" className="add__input" value={this.state.price} onChangeText={this.handlePriceEvent} />
				<View>
					<Button onPress={this.handleSubmit} title="Add" type="submit" className="add__button" />
				</View>
			</View>
		);
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state);
		this.setState({
            name: "",
			price: ""
        })
	};

	handleNameEvent = (event) => {
		this.setState({
			name: event.target.value
		})
	};

	handlePriceEvent = (event) => {
		this.setState ({
			price: event.target.value
		})
	};
}

export default AddNewItem;

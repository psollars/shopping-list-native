import React from 'react';
import { AppRegistry } from 'react-native';
import Main from './src/Main';

export default class App extends React.Component {
  
  render() {
    return (
        <Main />
    );
  }
}

AppRegistry.registerComponent('shopping-list-native', () => Main);
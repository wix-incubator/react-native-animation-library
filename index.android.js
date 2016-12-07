import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import App from './App';


export default class RNAnimationLib extends Component {
  render() {
    return (
      <App/>
    )
  }
}


AppRegistry.registerComponent('RNAnimationLib', () => RNAnimationLib);
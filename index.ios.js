//import React, { Component } from 'react';
//import {
//  AppRegistry,
//  StyleSheet,
//  Text,
//  View,
//  Animated,
//  Switch
//} from 'react-native';
//import BridgeNoiseMaker from './src/BridgeNoiseMaker';
//import {RNALPrettyBoxSwitch} from './src';
//
//export default class RNAnimationLib extends Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//      bounceValue: new Animated.Value(0),
//      noiseMakerIsOn: false
//    };
//  }
//
//  componentDidMount() {
//    this.state.bounceValue.setValue(1.5);
//    Animated.spring(
//      this.state.bounceValue,
//      {
//        toValue: 0.8,
//        friction: 1,
//      }
//    ).start();
//  }
//
//  _onSwitchChanged(val) {
//    console.log('_onSwitchChanged', val);
//    this.setState({noiseMakerIsOn: val});
//  }
//
//  _renderNoiseMaker() {
//    if (this.state.noiseMakerIsOn) {
//      return (
//        <BridgeNoiseMaker/>
//      )
//    }
//  }
//
//  render() {
//    console.log('render', this.state.noiseMakerIsOn);
//    return (
//      <View style={{flex: 1}}>
//        <RNALPrettyBoxSwitch/>
//
//        <Switch
//          value={this.state.noiseMakerIsOn}
//          onValueChange={(val)=> this._onSwitchChanged(val)}
//        />
//
//        {this._renderNoiseMaker()}
//      </View>
//    );
//  }
//
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#F5FCFF',
//  },
//  welcome: {
//    fontSize: 20,
//    textAlign: 'center',
//    margin: 10,
//  },
//  instructions: {
//    textAlign: 'center',
//    color: '#333333',
//    marginBottom: 5,
//  },
//});
//
//AppRegistry.registerComponent('RNAnimationLib', () => RNAnimationLib);

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import App from './Example/App';


export default class RNAnimationLib extends Component {

  render(){

    return (
      <App/>
    )
  }

}


AppRegistry.registerComponent('RNAnimationLib', () => RNAnimationLib);
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Switch
} from 'react-native';
import {RNALPrettyBoxSwitch} from 'react-native-animation-library';

export default class RNALPrettyBoxSwitchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
      noiseMakerIsOn: false
    };
  }

  componentDidMount() {
    this.state.bounceValue.setValue(1.5);
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: 0.8,
        friction: 1,
      }
    ).start();
  }

  _onSwitchChanged(val) {
    console.log('_onSwitchChanged', val);
    this.setState({noiseMakerIsOn: val});
  }



  render() {
    return (
      <View style={{flex: 1}}>
        <RNALPrettyBoxSwitch/>

      </View>
    );
  }

}
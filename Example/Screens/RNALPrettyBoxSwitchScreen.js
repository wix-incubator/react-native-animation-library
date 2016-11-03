import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Switch
} from 'react-native';
import BridgeNoiseMaker from '../../src/BridgeNoiseMaker';
import {RNALPrettyBoxSwitch} from '../../src';

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

  _renderNoiseMaker() {
    const noiseMaker = this.state.noiseMakerIsOn ? <BridgeNoiseMaker/> : null;
    return (
      <View style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      }}>
        <Switch
          value={this.state.noiseMakerIsOn}
          onValueChange={(val)=> this._onSwitchChanged(val)}
        />
        {noiseMaker}
      </View>
    )
  }

  render() {
    console.log('render', this.state.noiseMakerIsOn);
    return (
      <View style={{flex: 1}}>
        <RNALPrettyBoxSwitch/>

        {this._renderNoiseMaker()}
      </View>
    );
  }

}
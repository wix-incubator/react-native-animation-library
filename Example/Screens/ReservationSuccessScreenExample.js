import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Switch
} from 'react-native';
import BridgeNoiseMaker from '../../src/BridgeNoiseMaker';
import ReservationSuccessScreen from '../../src/ReservationSuccessScreen';

export class ReservationSuccessScreenExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
    return (
      <View style={{flex: 1}}>

        <ReservationSuccessScreen />

        {this._renderNoiseMaker()}

      </View>
    );
  }
}

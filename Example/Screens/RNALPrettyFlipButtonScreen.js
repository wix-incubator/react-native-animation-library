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
import {RNALPrettyFlipButton} from '../../src';

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
    if (this.state.noiseMakerIsOn) {
      return (
        <BridgeNoiseMaker/>
      )
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <RNALPrettyFlipButton
          firstState={{image: require('../Images/CameraIcon.png')}}
          secondState={{image: require('../Images/SendIcon.png')}}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
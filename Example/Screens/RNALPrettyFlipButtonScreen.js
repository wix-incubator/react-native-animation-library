import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Switch,
  TextInput
} from 'react-native';
import BridgeNoiseMaker from '../../src/BridgeNoiseMaker';
import {RNALPrettyFlipButton} from '../../src';

export default class RNALPrettyBoxSwitchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
      noiseMakerIsOn: false,
      text: "kkk"
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
    this.setState({noiseMakerIsOn: val});
  }

  _renderNoiseMaker() {
    if (this.state.noiseMakerIsOn) {
      return (
        <BridgeNoiseMaker/>
      )
    }
  }

  _onTextChanged(text) {
    this.setState({text});

  }

  render() {
    return (
      <View style={{flex:1, justifyContent: 'center',alignItems: 'center', flexDirection: 'row'}}>


        <View>
          <TextInput
            onChangeText={(text) => this._onTextChanged(text)}
            value={this.state.text}
            placeholder={"yyyyyy"}
            style={{ backgroundColor: 'lightgray', height: 30, width: 150}}
          />
        </View>
        <View>
          <RNALPrettyFlipButton
            firstState={{text: ' Send', style:{fontSize : 28, color: 'purple'}}}
            secondState={{image: require('../Images/CameraIcon.png')}}
          />
        </View>
        <RNALPrettyFlipButton
          firstState={{image: require('../Images/SendIcon.png')}}
          secondState={{image: require('../Images/CameraIcon.png')}}
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
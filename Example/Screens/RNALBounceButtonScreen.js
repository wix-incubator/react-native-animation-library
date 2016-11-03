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
import {RNALBounceButton} from '../../src';

export default class RNALBounceButtonScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  render() {
    return (
      <View style={{flex:1, justifyContent: 'center',alignItems: 'center', backgroundColor: 'white'}}>
        <RNALBounceButton style={{width:94, height:89}} firstImage={require('./../Images/favorite_empty@2x.png')} secondImage={require('./../Images/favorite_full@2x.png')}/>
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
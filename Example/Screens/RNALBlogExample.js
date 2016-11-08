import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Switch,
  TextInput,
  Image
} from 'react-native';
import {RNALBounceButton} from 'react-native-animation-library';

export default class RNALBlogExample extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  render() {
    return (
      <View style={{flex:1, justifyContent: 'center',alignItems: 'center', backgroundColor: 'gray'}}>
        <Image
          source={require('./../Images/blog.png')}
          resizeMode={Image.resizeMode.center}
          style={{ flex: 1}}
        />
        <RNALBounceButton
          style={{zIndex: 100, position: 'absolute', top:506, left: 25, width: 20, height: 20}}
          firstImage={require('./../Images/favorite_empty@2x.png')}
          secondImage={require('./../Images/favorite_full@2x.png')}/>
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
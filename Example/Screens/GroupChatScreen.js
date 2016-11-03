import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Switch
} from 'react-native';

export class GroupChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
        position: 'relative'
      }}>
        <Image
          source={require('../../assets/group-chat-screen.png')}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: null,
            height: null,
          }}
        />
      </View>
    );
  }

}

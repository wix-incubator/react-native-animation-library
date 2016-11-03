import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  Image,
  AlertIOS
} from 'react-native';

import {RNALPrettyBoxSwitchScreen, RNALPrettyFlipButtonScreen} from './Screens';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      example: undefined
    };
  }

  render() {
    if (this.state.example) {
      const Example = this.state.example;
      return <Example />;
    }
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={() => this.setState({example: RNALPrettyBoxSwitchScreen})}>
          <Text style={styles.buttonText}>
            Pretty Box Switch
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.setState({example: RNALPrettyFlipButtonScreen})}>
          <Text style={styles.buttonText}>
            Pretty Flip Button
          </Text>
        </TouchableOpacity>


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
  buttonText: {
    color: 'blue',
    marginBottom: 20,
    fontSize: 20

  }
});

AppRegistry.registerComponent('RNAnimationLib', () => RNAnimationLib);
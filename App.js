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


import {FlipAnimatedImage} from './src';
import {AnimatedListViewScreen} from './Screens'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      example: undefined,
      starIsSelected: false,
      prettySwitchValue: false
    };
  }

  render() {
    if (this.state.example) {
      const Example = this.state.example;
      return <Example />;
    }
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={() => this.setState({example: AnimatedListViewScreen})}>
          <Text style={styles.buttonText}>
            Animated List View Screen
          </Text>
        </TouchableOpacity>


        <TouchableOpacity activeOpacity={0.7} onPress={() => this.setState({starIsSelected: !this.state.starIsSelected})} style={{margin: 30}}>
          <FlipAnimatedImage style={{justifyContent: 'center', alignItems: 'center'}}
                             isSelected={this.state.starIsSelected}
                             unSelectedImage={require('./Images/favorite_empty.png')}
                             selectedImage={require('./Images/favorite_full.png')}
                             duration={{bounceOut: 50, bounceIn: 100}}
          />
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
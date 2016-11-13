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

import {
  RNALPrettyBoxSwitchScreen,
  RNALPrettyFlipButtonScreen,
  GroupChatScreen,
  ReservationSuccessScreenExample,
  RNALBounceButtonScreen,
  RNALBlogExample,
} from './Screens';

import {FlipAnimatedImage, RNALPrettySwitch} from 'react-native-animation-library';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      example: undefined,
      starIsSelected: false
    };
  }

  _onPress() {
    console.error('_onPress from Bounce Button Screen');
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

        <TouchableOpacity onPress={() => this.setState({example: GroupChatScreen})}>
          <Text style={styles.buttonText}>
            Group Chat Screen
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.setState({example: ReservationSuccessScreenExample})}>
          <Text style={styles.buttonText}>
            Reservation Flow
          </Text>
        </TouchableOpacity>

        <RNALPrettySwitch/>


        <TouchableOpacity onPress={() => this.setState({starIsSelected: !this.state.starIsSelected})} style={{margin: 30}}>
          <FlipAnimatedImage style={{justifyContent: 'center', alignItems: 'center'}}
                             isSelected={this.state.starIsSelected}
                             unSelectedImage={require('./Images/favorite_empty.png')}
                             selectedImage={require('./Images/favorite_full.png')}
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
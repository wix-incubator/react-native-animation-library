import React, {Component} from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  Animated,
  Easing
} from 'react-native';
import styles from './style';

export default class ReservationSuccessScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0.85),
      opacityValue: new Animated.Value(0),
    };
  }

  dismiss() {
    this.animateImage();
  }

  componentDidMount() {
    this.animateImage();
  }

  animateImage() {
    this.state.bounceValue.setValue(0.75);
    this.state.opacityValue.setValue(0);

    Animated.parallel([
      Animated.spring(
        this.state.bounceValue,
        {
          duration: 1000,
          toValue: 1,
          friction: 2,
        }
      ),
      Animated.timing(
        this.state.opacityValue,
        {
          duration: 400,
          toValue: 1,
          easing: Easing.linear
        }
      )
    ]).start();


  }

  renderMessage() {
    return (
      <View style={styles.container}>
        <Animated.Image source={require('./img/confirm.png')} style={{
          opacity: this.state.opacityValue,
          transform: [
            {scale: this.state.bounceValue},
          ]
        }}
        />
        <Text style={styles.title}>Your Reservation was Saved</Text>
        <Text style={styles.message}>A confirmation email with all the details was sent to your guest</Text>
        <TouchableOpacity onPress={this.dismiss.bind(this)}><Text style={styles.button}>Done</Text></TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderMessage()}
      </View>
    );
  }
}
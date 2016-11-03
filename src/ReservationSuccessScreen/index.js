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
      // imageBounceValue: new Animated.Value(1.3),
      imageOpacityValue: new Animated.Value(0),
      titleFadeAnim: new Animated.Value(0),
      contentFadeAnim: new Animated.Value(0),
    };
  }

  dismiss() {
    this.animateStuff();
  }

  componentDidMount() {
    this.animateStuff();
  }

  animateStuff() {
    this.state.imageOpacityValue.setValue(0);
    this.state.titleFadeAnim.setValue(0);
    this.state.contentFadeAnim.setValue(0);

    Animated.parallel([
      Animated.timing(
        this.state.imageOpacityValue,
        {
          duration: 400,
          toValue: 1,
          easing: Easing.elastic(1)
        }
      ),
      Animated.timing(
        this.state.titleFadeAnim,
        {
          duration: 400,
          toValue: 1,
          easing: Easing.elastic(0.9),
          delay: 100,
        }
      ),
      Animated.timing(
        this.state.contentFadeAnim,
        {
          duration: 400,
          toValue: 1,
          easing: Easing.elastic(0.7),
          delay: 200
        }
      ),
    ]).start();
  }

  renderMessage() {
    this.anim = this.anim || new Animated.Value(100);
    return (
      <View style={styles.container}>
        <Animated.Image source={require('./img/confirm.png')} style={{
          opacity: this.state.imageOpacityValue,
          transform: [
            {translateY: this.state.imageOpacityValue.interpolate({
              inputRange: [0, 1],
              outputRange: [30, 0]
            })},
          ]
        }}
        />
        <Animated.View style={{
          opacity: this.state.titleFadeAnim,
          transform: [
            {translateY: this.state.titleFadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [20, 0]
            })},
          ]
        }}>
          <Animated.Text style={styles.title}>Your Reservation was Saved</Animated.Text>
        </Animated.View>
        <Animated.View style={{
          opacity: this.state.contentFadeAnim,
          transform: [
            {translateY: this.state.contentFadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [20, 0]
            })},
          ]
        }}>
          <Text style={styles.message}>A confirmation email with all the details was sent to your guest</Text>
          <TouchableOpacity style={{alignSelf: 'center'}} onPress={this.dismiss.bind(this)}><Text style={styles.button}>Done</Text></TouchableOpacity>
        </Animated.View>
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
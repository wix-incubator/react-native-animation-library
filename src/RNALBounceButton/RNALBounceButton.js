import React, { Component } from 'react';
import {
  View,
  Switch,
  Animated,
  StyleSheet,
  Easing,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';


export default class RNALBounceButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      presentedImage: this.props.firstImage,
      scaleValue: new Animated.Value(1),
      opacityValue: new Animated.Value(1),
    }
  }

  _onPressButton() {

    Animated.parallel([
      Animated.sequence([
        Animated.timing(
          this.state.opacityValue,
          {
            duration: 150,
            toValue: 0.1,
            easing: Easing.linear
          }
        ),
      ]),
      Animated.sequence([
        Animated.timing(
          this.state.scaleValue,
          {
            duration: 150,
            toValue: 1.2,
            easing: Easing.linear
          }
        )
      ])
    ]).start(() => this._swapImages());
  }

  _swapImages() {
    const newPresentedImage = this.state.presentedImage === this.props.firstImage ? this.props.secondImage : this.props.firstImage
    this.setState({presentedImage: newPresentedImage});

    Animated.parallel([
      Animated.sequence([
        Animated.timing(
          this.state.opacityValue,
          {
            duration: 100,
            toValue: 1,
            easing: Easing.linear
          }
        )
      ]),
      Animated.sequence([
        Animated.timing(
          this.state.scaleValue,
          {
            duration: 50,
            toValue: 0.9,
            easing: Easing.linear
          }
        ),
        Animated.timing(
          this.state.scaleValue,
          {
            duration: 50,
            toValue: 1,
            easing: Easing.linear
          }
        )
      ])
    ]).start();
  }


  render() {
    return (
      <TouchableOpacity onPress={() => this._onPressButton()} activeOpacity={0.8} style={this.props.style}>
        <Animated.Image
          source={this.state.presentedImage}
          style={{
            transform: [
              {scale: this.state.scaleValue},
            ],
            opacity: this.state.opacityValue,
            width: this.props.style.width,
            height: this.props.style.height,
          }}
        />






      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({

});
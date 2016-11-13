import React, { Component } from 'react';
import {
  View,
  Switch,
  Animated,
  StyleSheet,
  Easing,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity
} from 'react-native';


export default class FlipAnimatedImage extends Component {
  mixins: [Touchable.Mixin];

  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      selectedImage: this.props.selectedImage,
      unSelectedImage: this.props.unSelectedImage,
      scaleValue: new Animated.Value(1),
      opacityValue: new Animated.Value(1),
      timing: this.props.timing
    }
  }

  _selectedChanged(isSelected) {

    Animated.parallel([
      Animated.sequence([
        Animated.timing(
          this.state.opacityValue,
          {
            duration: 150,
            toValue: 0.2,
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
    ]).start(() => this._swapImages(isSelected));
  }

  _swapImages(isSelected) {
    const newPresentedImage = isSelected ? this.props.selectedImage : this.props.unselectedImage
    this.setState({isSelected: isSelected});

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
            duration: 100,
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

  componentWillReceiveProps(nextProps) {
    this._selectedChanged(nextProps.isSelected);
  }

  render() {
    const inheritStyle = this.props.style ? this.props.style : {}
    return (
      <Animated.Image
        {...this.props}
        source={this.state.isSelected ? this.props.selectedImage : this.props.unSelectedImage}
        style={[...inheritStyle, {
          transform: [
            {scale: this.state.scaleValue},
          ],
          opacity: this.state.opacityValue,
        }]}
      >
      </Animated.Image>
    )
  }
}

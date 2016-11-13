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
      duration: this.props.duration.bounceOut && this.props.duration.bounceIn ? this.props.duration : {bounceOut: 150, bounceIn: 100}
    }
  }

  _selectedChanged(isSelected) {


    Animated.sequence([
      Animated.timing(
        this.state.scaleValue,
        {
          duration: this.state.duration.bounceOut,
          toValue: 1.2
        }
      ),
      Animated.parallel([
        Animated.timing(
          this.state.opacityValue,
          {
            duration: this.state.duration.bounceIn,
            toValue: 0.1,
          }
        ),
        Animated.timing(
          this.state.scaleValue,
          {
            duration: this.state.duration.bounceIn,
            toValue: 0.2
          }
        )
      ])
    ]).start(() => this._swapImages(isSelected));
  }

  _swapImages(isSelected) {
    const newPresentedImage = isSelected ? this.props.selectedImage : this.props.unselectedImage
    this.setState({isSelected: isSelected});

    Animated.parallel([
      Animated.timing(
        this.state.opacityValue,
        {
          duration: this.state.duration.bounceOut+this.state.duration.bounceIn,
          toValue: 1,
        }
      ),
      Animated.sequence([
        Animated.timing(
          this.state.scaleValue,
          {
            duration: this.state.duration.bounceOut+this.state.duration.bounceIn,
            toValue: 1.2
          }
        ),
        Animated.timing(
          this.state.scaleValue,
          {
            duration: this.state.duration.bounceOut,
            toValue: 1
          }
        )
      ])
    ]).start();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isSelected === this.state.isSelected) return;
    this._selectedChanged(nextProps.isSelected);
  }

  render() {
    const inheritStyle = this.props.style ? this.props.style : {}
    return (
      <Animated.Image
        {...this.props}
        source={this.state.isSelected ? this.props.selectedImage : this.props.unSelectedImage}
        style={[inheritStyle, {
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

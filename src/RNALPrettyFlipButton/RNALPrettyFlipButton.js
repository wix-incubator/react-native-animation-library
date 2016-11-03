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

export default class RNALPrettyFlipButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      presentedObject: this.props.firstState,
      scaleValue: new Animated.Value(1)
    }
  }

  _onPressButton() {

    Animated.sequence([
      Animated.timing(
        this.state.scaleValue,
        {
          duration: 70,
          toValue: 1.2,
          easing: Easing.linear
        }
      ),
      Animated.timing(
        this.state.scaleValue,
        {
          duration: 80,
          toValue: 0.1,
          easing: Easing.linear
        }
      )
    ]).start(()=>this._swapImages());
  }

  _swapImages() {

    const newPresentedObject = this.state.presentedObject === this.props.firstState ? this.props.secondState : this.props.firstState
    this.setState({presentedObject: newPresentedObject});



    Animated.sequence([
      Animated.timing(
        this.state.scaleValue,
        {
          duration: 60,
          toValue: 1,
          easing: Easing.linear
        }
      ),
      Animated.timing(
        this.state.scaleValue,
        {
          duration: 70,
          toValue: 1.2,
          easing: Easing.linear
        }
      ),
      Animated.timing(
        this.state.scaleValue,
        {
          duration: 70,
          toValue: 1,
          easing: Easing.linear
        }
      )
    ]).start();
  }

  _renderContent() {
    if (this.state.presentedObject.image) {
      return this._renderImage();
    } else {
      return this._renderText();
    }
  }

  _renderImage() {
    return (
      <Animated.Image
        source={this.state.presentedObject.image}
        resizeMode={Image.resizeMode.center}
        style={{
          transform: [
            {scale: this.state.scaleValue},
          ]
        }}
      />
    )
  }

  _renderText() {
    return (
      <Animated.Text
        style={[this.state.presentedObject.style, {
          transform: [
            {scale: this.state.scaleValue},
          ]
        }]}>
        {this.state.presentedObject.text}
      </Animated.Text>
    )
  }

  render() {
    return (
      <View style={this.props.style}>
        <TouchableOpacity onPress={() => this._onPressButton()}>
          {this._renderContent()}
        </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({

});
import _ from 'lodash';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Animated,
  Easing,
} from 'react-native';

const useNativeDriver = true;

export default class AnimatedListViewItem extends Component {
  constructor(props) {
    super(props);
    const offsetY = _(this.props.animationOption).get('offsetY', 100);
    const initialOpacity = _(this.props.animationOption).get('initialOpacity', .4);
    const duration = _(this.props.animationOption).get('duration', 400);

    this.performAnimation = this.performAnimation.bind(this);
    this.state = {
      animatedValue: new Animated.Value(offsetY),
      fadeAnimation: new Animated.Value(initialOpacity),
      duration
    };
  }

  componentDidMount() {
    this.props.events.on('performAnimation', this.performAnimation);
    this.performAnimation();
  }

  componentWillUnmount() {
    this.props.events.removeAllListeners();
  }

  performAnimation() {

    Animated.stagger(this.props.rowID * 40, [
      Animated.timing(
        this.state.fadeAnimation,
        {
          toValue: 1,
          duration: this.state.duration,
          useNativeDriver
        }
      ),

      Animated.timing(
        this.state.animatedValue,
        {
          toValue: 0,
          duration: this.state.duration,
          useNativeDriver
        }
      )
    ]).start();

  };

  render() {
    return (
      <Animated.View
        style={{opacity: this.state.fadeAnimation, transform: [
          {
            translateY: this.state.animatedValue
          }
        ]}}>
        {this.props.children}
      </Animated.View>
    );
  }
}

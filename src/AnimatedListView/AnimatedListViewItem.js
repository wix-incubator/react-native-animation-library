import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Animated,
  Easing,
} from 'react-native';
var EventEmitter = require('EventEmitter');

const duration = 400;
const useNativeDriver = true;


export default class AnimatedListViewItem extends Component {
  constructor(props) {
    super(props);
    this.performAnimation = this.performAnimation.bind(this);
    this.state = {
      animatedValue: new Animated.Value(100),
      fadeAnimation: new Animated.Value(.3)

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
          duration,
          useNativeDriver
        }
      ),

      Animated.timing(
        this.state.animatedValue,
        {
          toValue: 0,
          duration,
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

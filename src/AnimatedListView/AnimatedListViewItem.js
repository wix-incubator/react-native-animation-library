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
    const shouldAnimate = _(this.props.animationOption).get('shouldAnimate', true);
    const cellAnimationDelay =_(this.props.animationOption).get('cellAnimationDelay', 200);


    this.performAnimation = this.performAnimation.bind(this);
    this.state = {
      animatedValue: new Animated.Value(offsetY),
      fadeAnimation: new Animated.Value(initialOpacity),
      shouldPerformAnimation: shouldAnimate,
      duration,
      cellAnimationDelay
    };
  }


  componentDidMount() {
    this.props.events.on('performAnimation', this.performAnimation);
    this.performAnimation();
  }


  componentWillUnmount() {
    this.props.events.removeAllListeners();
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.animationOption.shouldAnimate) {
      this.state.fadeAnimation.stopAnimation();
      this.state.animatedValue.stopAnimation();
    }

    this.setState({shouldPerformAnimation: nextProps.shouldAnimate});
  }

  performAnimation() {
    Animated.sequence( [
      Animated.delay(this.props.rowID * this.state.cellAnimationDelay),
      Animated.parallel([
          Animated.timing(
            this.state.fadeAnimation,
            {
              toValue: 1,
              duration: this.state.duration,
              useNativeDriver,
            }
          ),

          Animated.timing(
            this.state.animatedValue,
            {
              easing: Easing.out(Easing.quad),
              toValue: 0,
              duration: this.state.duration,
              useNativeDriver
            }
          )
        ]
      )
    ]).start();
  };


  getStyle() {
    if (!this.state.shouldPerformAnimation) {
      return;
    }

    return (
      {opacity: this.state.fadeAnimation, transform: [
        {
          translateY: this.state.animatedValue
        }
      ]}
    )
  }

  render() {
    const style = this.getStyle();

    return (
      <Animated.View
        style={style}>
        {this.props.children}
      </Animated.View>
    );
  }
}

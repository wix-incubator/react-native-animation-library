import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Switch,
  Animated,
  LayoutAnimation,
  StyleSheet,
  Easing,
  Text
} from 'react-native';

export default class RNALPrettySwitch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
      animatedBackgroundScaleSize: new Animated.Value(0),
      animatedOpacityValue: new Animated.Value(1),
    }
  }

  _onValueChanged(val) {
    this.setState({switchValue: val});
    val ? this.animateTo(30) : this.resetAnimation();
  }

  resetAnimation() {
    this.setState({
      animatedBackgroundScaleSize: new Animated.Value(0),
      animatedOpacityValue: new Animated.Value(1),
    })
  }

  animateTo(to) {
    Animated.parallel([
      Animated.timing(
        this.state.animatedBackgroundScaleSize,
        {
          duration: 300,
          toValue: to,
          easing: Easing.linear
        }
      ),
      Animated.timing(
        this.state.animatedOpacityValue,
        {
          duration: this.state.switchValue ? 250 : 300,
          toValue: this.state.switchValue ? 1 : 0,
          easing: Easing.linear
        }
      )
    ]).start();
  }

  render() {
    return (
      <View style={styles.switchContainer}>
        <Switch
          value={this.state.switchValue}
          onTintColor="#4eb7f5"
          tintColor="#b6c1cd"
          onValueChange={(val)=> this._onValueChanged(val)}
          style={styles.switchElement}
        />
        <View style={styles.switchTintBackground} />
        <View style={styles.switchBackground}>
          <Animated.View style={[
          styles.switchBackgroundBubble,
          {
            opacity: this.state.animatedOpacityValue,
            transform: [{ scale: this.state.animatedBackgroundScaleSize }]
          }
        ]} />
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  switchContainer: {
  },
  switchElement: {
    position: 'relative', zIndex: 100,
  },
  switchTintBackground: {
    position: 'absolute', backgroundColor: '#b6c1cd', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2,
    borderRadius: 20,
  },
  switchBackground: {
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  switchBackgroundBubble: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4eb7f5',
  }
});
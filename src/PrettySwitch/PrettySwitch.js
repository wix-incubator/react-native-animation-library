import React, { Component } from 'react';
import {
  View,
  Switch,
  Animated,
  StyleSheet,
  Easing,
  Text
} from 'react-native';

export default class PrettySwitch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animatedBackgroundScaleSize: new Animated.Value(0),
      animatedOpacityValue: new Animated.Value(1),
      duration: this.props.duration ? this.props.duration : 300,
    }
  }

  _onValueChange(val) {
    this._updateValueChange(val);
    val ? this.animateTo(val) : this.resetAnimation(val);
  }

  resetAnimation(val) {
    this.setState({
      animatedBackgroundScaleSize: new Animated.Value(0),
      animatedOpacityValue: new Animated.Value(1),
    })
    this._updateValueChange(val);
  }

  animateTo(val) {
    Animated.parallel([
      Animated.timing(
        this.state.animatedBackgroundScaleSize,
        {
          duration: this.state.duration,
          toValue: 30,
          easing: Easing.linear
        }
      ),
      Animated.timing(
        this.state.animatedOpacityValue,
        {
          duration: this.props.value ? 250 : 300,
          toValue: this.state.value ? 1 : 0,
          easing: Easing.linear
        }
      )
    ]).start(() => this._updateValueChange(val));
  }

  _updateValueChange(val) {
    if (this.props.onValueChange) {
      this.props.onValueChange(val);
    }
  }

  render() {
    console.warn('kkk', this.props.value)
    return (
      <View style={styles.switchContainer}>
        <Switch
          {...this.props}
          onValueChange={(val)=> this._onValueChange(val)}
          style={[this.props.style, styles.switchElement]}
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
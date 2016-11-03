import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Switch,
  Animated,
  LayoutAnimation,
  StyleSheet,
  Easing,
  Image,
  Text
} from 'react-native';

export default class RNALPrettyBoxSwitch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
      animatedBackgroundScaleSize: new Animated.Value(0),
      animatedOpacityValue: new Animated.Value(0),
    }
  }

  _onValueChanged(val) {
    this.setState({switchValue: val});
    val ? this.animateTo(35) : this.animateTo(0);
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
          toValue: this.state.switchValue ? 0 : 1,
          easing: Easing.linear
        }
      )
    ]).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.switchContainer}>
          <Switch
            value={this.state.switchValue}
            onTintColor="#3899ec"
            tintColor="transparent"
            onValueChange={(val)=> this._onValueChanged(val)}
            style={styles.switchElement}
          />
          <Animated.View style={[
            styles.switchBackground,
            {
              opacity: this.state.animatedOpacityValue,
              transform: [{ scale: this.state.animatedBackgroundScaleSize }]
            }
          ]} />
        </View>
        <Image resizeMode='contain' source={require('./img/feature.png')} style={styles.image} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden'
  },
  switchContainer: {
  },
  image: {left: 0, right: 0, bottom: 0, top: 0, width: 250, height: 300, zIndex: 10},
  contentContainer: {
    backgroundColor: 'transparent',
    zIndex: 10,
    marginRight: 20
  },
  switchElement: {
    position: 'relative', zIndex: 100, borderColor: '#ccc', borderWidth: 1, borderRadius: 15.5
  },
  switchBackground: {
    position: 'absolute', backgroundColor: '#3899ec', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1,
    borderRadius: 20,
  }
});
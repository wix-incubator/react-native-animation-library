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

export default class RNALPrettyFlipButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.container}>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: 'row', backgroundColor: '#eeeeee', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden'
  },
  switchContainer: {
  },
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
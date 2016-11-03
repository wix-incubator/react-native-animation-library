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
      presentedImage: this.props.firstState.image,
      scaleValue: new Animated.Value(1)
    }
  }

  _onPressButton() {
    //const image = this.state.presentedImage === this.props.firstState.image ? this.props.secondState.image : this.props.firstState.image
    //this.setState({presentedImage: image});

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
          duration: 100,
          toValue: 0.1,
          easing: Easing.linear
        }
      )
    ]).start(()=>this._swapImages());
  }

  _swapImages() {
    const image = this.state.presentedImage === this.props.firstState.image ? this.props.secondState.image : this.props.firstState.image
    this.setState({presentedImage: image});

    //console.error(image);

    Animated.sequence([
      Animated.timing(
        this.state.scaleValue,
        {
          duration: 100,
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

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this._onPressButton()}>
          <Animated.Image
            source={this.state.presentedImage}
            resizeMode={Image.resizeMode.center}
            style={{
              transform: [                        // `transform` is an ordered array
                {scale: this.state.scaleValue},  // Map `bounceValue` to `scale`
              ]
            }}
          />
        </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: 'row', backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center'
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
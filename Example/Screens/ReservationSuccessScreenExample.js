import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing,
  Switch,
  TouchableHighlight,
  LayoutAnimation
} from 'react-native';
import BridgeNoiseMaker from '../../src/BridgeNoiseMaker';
import ReservationSuccessScreen from '../../src/ReservationSuccessScreen';

export class ReservationSuccessScreenExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingSuccessScreen: false,
      closedSuccessScreen: false,
      successScaleValue: new Animated.Value(0),
    };
  }

  componentWillMount() {
    LayoutAnimation.configureNext({
      duration: 400,
      create: {
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 0.7,
      },
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 0.7,
      },
    });
  }

  _onSwitchChanged(val) {
    console.log('_onSwitchChanged', val);
    this.setState({noiseMakerIsOn: val});
  }

  _renderNoiseMaker() {
    const noiseMaker = this.state.noiseMakerIsOn ? <BridgeNoiseMaker/> : null;
    return (
      <View style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      }}>
        <Switch
          value={this.state.noiseMakerIsOn}
          onValueChange={(val)=> this._onSwitchChanged(val)}
        />
        {noiseMaker}
      </View>
    )
  }

  pressSave() {
    this.showReservationSuccess();
  }

  onSuccessDone() {
    this.goToReservationCalendar();
  }

  showReservationSuccess() {
    this.setState({
      showingSuccessScreen: true
    });

    Animated.timing(
      this.state.successScaleValue,
      {
        duration: 400,
        toValue: 1,
        easing: Easing.elastic(1)
      }
    ).start();
  }

  goToReservationCalendar() {
    this.changeToCalendar();
    this.hideReservationSuccessScreen();
  }

  changeToCalendar() {
    this.setState({
      closedSuccessScreen: true
    })
  }

  hideReservationSuccessScreen() {
    this.setState({
      showingSuccessScreen: false
    });

    Animated.timing(
      this.state.successScaleValue,
      {
        duration: 400,
        toValue: 0,
        easing: Easing.elastic(1)
      }
    ).start();
  }

  renderScreen() {
    return (
      <Animated.View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'stretch',
            position: 'relative',
            zIndex: (this.state.showingSuccessScreen || this.state.closedSuccessScreen) ? 10 : -10,
            opacity: this.state.successScaleValue,
            transform: [
              {scale: this.state.successScaleValue}
            ]
          }}>
        <ReservationSuccessScreen showAnimation={this.state.showingSuccessScreen} onSuccessDone={this.onSuccessDone.bind(this)} />
      </Animated.View>
    );
  }

  renderSaveButton() {
    if(this.state.showingSuccessScreen || this.state.closedSuccessScreen) {
      return null;
    }

    return (
      <View style={{
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 2000,
      }}>
        <TouchableHighlight onPress={this.pressSave.bind(this)} underlayColor='#eeeeee' style={{
          position: 'absolute',
          right: 5,
          top: 28,
          width: 65,
          height: 35,
          opacity: 0.5,
          borderWidth: 1,
          borderColor: '#ccc',
        }}>
          <View />
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    return (
      <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'stretch',
            backgroundColor: '#F5FCFF',
            position: 'relative'
          }}>
        <Image
          source={require('../../assets/reservation-creation-screen.png')}
          style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: null,
                height: null,
                zIndex: this.state.closedSuccessScreen ? -10 : 10
              }}
        />
        <Image
          source={require('../../assets/reservation-calendar-screen.png')}
          style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: null,
                height: null,
                zIndex: this.state.closedSuccessScreen ? 10 : -10
              }}
        />

        {this.renderSaveButton()}

        {this.renderScreen()}

        {this._renderNoiseMaker()}

      </View>
    );
  }
}

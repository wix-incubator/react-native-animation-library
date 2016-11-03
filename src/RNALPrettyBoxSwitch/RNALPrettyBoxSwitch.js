import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Switch,
  Animated,
  LayoutAnimation
} from 'react-native';

export default class RNALPrettyBoxSwitch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
      animationBoxSize : 100,
      borderRadius: 5000
    }
}

  _onValueChanged(val) {
    this.setState({switchValue: val});
    LayoutAnimation.spring();
    this.setState({animationBoxSize: this.state.animationBoxSize + 10})
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
        <View style={{position: 'absolute', zIndex: 100}}>
          <Switch
            value={this.state.switchValue}
            onValueChange={(val)=> this._onValueChanged(val)}
          />
        </View>
        <View style={{position: 'absolute', zIndex:50, width: this.state.animationBoxSize, height: this.state.animationBoxSize, backgroundColor: 'blue'}}/>
        <View style={{position: 'absolute', backgroundColor: 'red', top: 0, left: 0, right: 0, bottom: 0, zIndex: 40, borderRadius: 80}}></View>
      </View>
    )
  }

}
import React, {Component} from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import styles from './style';

export default class ReservationSuccessScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  dismiss() {
    // do nothing
  }

  renderMessage() {
    return (
      <View style={styles.container}>
        <Image source={require('./img/confirm.png')}/>
        <Text style={styles.title}>Your Reservation was Saved</Text>
        <Text style={styles.message}>A confirmation email with all the details was sent to your guest</Text>
        <TouchableOpacity onPress={this.dismiss.bind(this)}><Text style={styles.button}>Done</Text></TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderMessage()}
      </View>
    );
  }
}
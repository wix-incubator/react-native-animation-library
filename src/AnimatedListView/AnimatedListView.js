import _ from 'lodash';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Animated,
} from 'react-native';
import EventEmitter from 'events';
import AnimatedListViewItem from './AnimatedListViewItem';

export default class AnimatedListView extends Component {


  constructor(props) {
    super(props);
    this._renderRow = this._renderRow.bind(this);
    this.state = {
      listViewKey: Date.now()
    };
    this.originRenderRow = this.props.renderRow;
    this.eventEmitter = null;
  }

  componentWillMount() {
    this.eventEmitter = new EventEmitter();
    this.eventEmitter.setMaxListeners(0);
  }



  _renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <AnimatedListViewItem
        rowID={rowID}
        key={rowID}
        events={this.eventEmitter}
        animation={this.props.animation}
      >
        {this.props.renderRow(rowData, sectionID, rowID, highlightRow)}
      </AnimatedListViewItem>
    );
  }

  performAnimation() {
    this.eventEmitter.emit('performAnimation', { someArg: 'argValue' });
    this.setState({listViewKey: Date.now()})
  }

  render() {
    return (
      <Animated.View>
        <ListView
          key={this.state.listViewKey}
          {...this.props}
          renderRow={this._renderRow}
        />
      </Animated.View>
    );
  }
}

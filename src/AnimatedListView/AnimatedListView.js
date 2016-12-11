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
      listViewKey: Date.now(),
      scrolled: false // if scrolled the animation stops
    };
    this.originRenderRow = this.props.renderRow;
    this.eventEmitter = null;
  }

  componentWillMount() {
    this.eventEmitter = new EventEmitter();
    this.eventEmitter.setMaxListeners(0);
  }



  _renderRow(rowData, sectionID, rowID, highlightRow) {
    const shouldAnimate = !this.state.scrolled;

    return (
      <AnimatedListViewItem
        rowID={rowID}
        key={rowID}
        events={this.eventEmitter}
        animationOption={{...this.props.animationOption, shouldAnimate}}
      >
        {this.props.renderRow(rowData, sectionID, rowID, highlightRow)}
      </AnimatedListViewItem>
    );
  }


  performAnimation() {
    this.setState({scrolled: false});
    this.eventEmitter.emit('performAnimation', { someArg: 'argValue' });
    this.setState({listViewKey: Date.now()})
  }

  _onScroll() {

    if (!this.state.scrolled) {
      this.setState({scrolled: true})
    }
    if (this.props.onScroll) {
      this.props.onScroll();
    }
  }

  render() {
    return (
      <ListView
        key={this.state.listViewKey}
        {...this.props}
        renderRow={this._renderRow}
        onScroll={() => this._onScroll()}
      />
    );
  }
}

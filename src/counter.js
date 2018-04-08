import React, { Component } from 'react';
import {View} from 'react-native';
import { connect } from 'react-redux';
import CountLabel from './counterLabel';
import { incrementCounter } from './actions';

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: count => dispatch(incrementCounter())
  };
};

class ConnectedCounter extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.incrementCounter();
  }

  render() {
    return (
      <View>
        <button onClick={this.handleClick}>Click Me</button>
        Count: <CountLabel />
      </View>
    );
  }
}

const Counter = connect(null, mapDispatchToProps)(ConnectedCounter);

export default Counter;

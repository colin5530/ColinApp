import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { connect } from 'react-redux';
import CountLabel from './counterLabel';
import { incrementCounter } from '../actions/actions';

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
        <Button title="Click Me" onPress={this.handleClick}/>
        <Text>Count: </Text><CountLabel />
      </View>
    );
  }
}

const Counter = connect(null, mapDispatchToProps)(ConnectedCounter);

export default Counter;

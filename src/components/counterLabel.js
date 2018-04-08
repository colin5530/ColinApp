import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { count: state };
};

class ConnectedCountLabel extends Component {

  render() {
    return (
      <View>
        <Text>{this.props.count}</Text>
      </View>
    );
  }
}

const CountLabel = connect(mapStateToProps)(ConnectedCountLabel);

export default CountLabel;

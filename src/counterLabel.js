import React from 'react';
import {Text} from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { count: state };
};

const ConnectedCountLabel = ({ count }) => <Text>{count}</Text>;

const CountLabel = connect(mapStateToProps)(ConnectedCountLabel);

export default CountLabel;

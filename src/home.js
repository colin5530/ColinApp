import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
// import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import Counter from './components/counter';

const mapStateToProps = state => {
  return { count: state };
};

class ConnectedHome extends React.Component {
  componentDidUpdate() {
    if (this.props.count >= 10) {
      this.props.navigation.navigate('Details', {clickedThrough: true, clicks: this.props.count});
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Counter/>
        <View>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      </View>
    );
  }
}

const HomeScreen = connect(mapStateToProps)(ConnectedHome);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

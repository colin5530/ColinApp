import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
// import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import Counter from './components/counter';
import LogoTitle from './components/logoTitle';
import ModalScreen from './components/modal';

const mapStateToProps = state => {
  return { count: state };
};

class ConnectedHome extends React.Component {
  static navigationOptions = ({ navigation }) => {
    // const params = navigation.state.params || {};
    
    return {
      title: 'Home',
      // headerTitle: <LogoTitle/>,
      headerLeft: (
        <Button
          backgroundColor="#f00"
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
        />
      ),
    };
  };

  componentDidUpdate() {
    if (this.props.count >= 10) {
      this.props.navigation.navigate(
        'Details', 
        {
          clickedThrough: true, 
          clicks: this.props.count,
          headerTitle: 'Clicks Navigation Title'
        }
      );
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Counter/>
        <View>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate(
              'Details', 
              {
                clicks: this.props.count,
                headerTitle: 'Navigation Title',
              }
            )}
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

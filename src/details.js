import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Details extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const params = navigation.state.params || {};

    const navOptions =  {
      title: params ? params.headerTitle : 'No Title',
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
      // headerRight: (
      //   <Button 
      //     onPress={params.increaseHeadCount}
      //     title="+1"
      //     color="#00f"
      //   />
      // ),
    };
    
    return navOptions;
  };

  // componentWillMount() {
  //   this.props.navigation.setParams({ increaseHeadCount: this._increaseHeadCount});
  // }

  // state = {
  //   headCount: 0,
  // };

  // _increaseHeadCount = () => {
  //   this.setState({ headCount: this.state.headCount + 1 });
  // };

  render() {
    let clickedThrough = this.props.navigation.state.params 
      ? this.props.navigation.state.params.clickedThrough
      : false;

    const detailsText = clickedThrough 
      ? 'You clicked ' + this.props.navigation.state.params.clicks + ' times' 
      : 'This is the details page';
    
      return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{detailsText}</Text>
        {/* <Text>{this.props.headCount}</Text> */}
        <Button
          title="Go to Details.. again"
          onPress={() => this.props.navigation.navigate('Details', {clicks: this.props.clicks})}
        />
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button 
          title="TitleChange"
          onPress={() => this.props.navigation.setParams({headerTitle: 'Button Title'})}
        />
      </View>
    );
  }
}
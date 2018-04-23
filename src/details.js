import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Details extends React.Component {
  render() {
    console.log(this.props.navigation.state);
    let clickedThrough = this.props.navigation.state.params 
        ? this.props.navigation.state.params.clickedThrough
        : false;

    const detailsText = clickedThrough 
        ? 'You clicked ' + this.props.navigation.state.params.clicks + ' times' 
        : 'This is the details page';
    
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{detailsText}</Text>
            <Button
                title="Go to Details.. again"
                onPress={() => this.props.navigation.navigate('Details')}
            />
            <Button
                title="Go Back"
                onPress={() => this.props.navigation.goBack()}
            />
        </View>
    );
  }
}
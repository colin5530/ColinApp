import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import store from './src/stores/store'; //Import the store
import HomeScreen from './src/home'; //Import the component file
import Details from './src/details';

const RootStack = StackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Details: {
        screen: Details,
    },
},
{
    initialRouteName: 'Home',
});

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootStack />
            </Provider>
        );
    }
}
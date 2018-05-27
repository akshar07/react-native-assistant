import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation'; 
 
import store from './app/store'; //Import the store
import Home from './app/components/home';
import NewsPref from './app/components/NewsPref';
import WelcomeUser from './app/components/WelcomeUser'; 
import Login from './app/components/Login';
import HomeScreen from './app/components/HomeScreen'

const RootStack = createStackNavigator(
  {
    Home: Home,
    Setup: NewsPref,
    WelcomeUser: WelcomeUser,
    Login: Login,
    HomeScreen: HomeScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootStack />
            </Provider>
        );
    }
}
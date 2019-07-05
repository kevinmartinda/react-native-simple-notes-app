import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { Provider } from 'react-redux'
import store from './src/public/redux/store'

import AppNavigator from './src/components/Router/RouteNavigator';

export default class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

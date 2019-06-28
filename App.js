import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import AppNavigator from './src/components/Router/RouteNavigator';

export default class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <AppNavigator />
    );
  }
}

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import {
  View,
  Text,
} from 'react-native';

import Header from './app/Header';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header message="Playing Em của ngày hôm qua" />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)',
  },
}

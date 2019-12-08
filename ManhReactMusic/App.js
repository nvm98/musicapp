/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {View} from 'react-native';

import Header from './app/Header';
import Player from './app/Player';

import {TRACKS} from './app/Shared/Constant'

export default class App extends Component {
    render() {
        return (
            <Player tracks = {TRACKS}/>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
};

import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const Header = ({
  message,
  onDownPress,
  onQueuePress,
  onMessagePress,
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onDownPress}>
                <Image style={styles.button}
                    source={require('../../sources/ic_keyboard_arrow_down_white.png')} />
    </TouchableOpacity>
    <Text onPress={onMessagePress}
      style={styles.message}>{message.toUpperCase()}</Text>
    <TouchableOpacity onPress={onQueuePress}>
                <Image style={styles.button}
                    source={require('../../sources/ic_queue_music_white.png')} />
    </TouchableOpacity>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 72,
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
  },
  message: {
    flex: 1,
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
      fontSize: 18,
      paddingTop : 4
  },
  button: {
    opacity: 0.72
  }
});

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Container } from 'native-base'

import footer from '../common/footer'
import header from '../common/header'

export default class run_sync_mobile extends Component {
  render() {
    return (
      <Container> 
          {header("Settings")}
            <View style={styles.container}>
              <Text style={styles.welcome}>
                All Settings
              </Text>
            </View>
          {footer("Settings")}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
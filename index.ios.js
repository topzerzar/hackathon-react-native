/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TNMainView from './src/component/TNMainView'

export default class hackathon_app extends Component {
  render() {
    return (
		<View style={styles.container}> 
			<TNMainView />
		</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('hackathon_app', () => hackathon_app);

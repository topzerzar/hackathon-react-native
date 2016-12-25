import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform
} from 'react-native';

import TNHomeView from './home/TNHomeView'

export default class TNMainView extends Component {

    render() {
        return(
            <View style={styles.container}>
                <TNHomeView />
            </View>
        )
    }
}


const styles = {
    container: {
        flex: 1,
    }
}
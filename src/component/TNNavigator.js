import React, { Component } from 'react'
import {
    AppRegistry,
    Navigator,
    StyleSheet,
    Text,
    View
} from 'react-native'

import NavigationBarRouteMapper from './TNNavigatorRouteMapper'

export default class JTMNavigation extends Component {
    renderScene (route, navigator) {
        switch (route.name) {
            
        }
    }

    render () {
        return (
            <Navigator
                initialRoute={{name: 'home'}}
                renderScene={this.renderScene}
                navigationBar={
                    <Navigator.NavigationBar
                        style={styles.navBar}
                        routeMapper={NavigationBarRouteMapper}
                    /> 
                }
            /> 
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

	navBar: {
		borderBottomColor: Color.BORDER_BASE,
		borderBottomWidth: 1,
	}
});

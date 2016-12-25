import React, { Component } from 'react'
import {
    AppRegistry,
    Navigator,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native'


export default NavigationBarRouteMapper = {
    LeftButton: function(route, navigator, index, navState) {
        switch (route.name) {
            case 'home':
                
            case 'searchResult':
                
        default:
            return null;
        } 
    },

    RightButton: function(route, navigator, index, navState) {
        switch (route.name) {
            case 'home':
                
            default:
                return null;
        }
    },

    Title: function(route, navigator, index, navState) {
        switch (route.name) {
            
        } 
    }
};

const styles = StyleSheet.create({
  
});

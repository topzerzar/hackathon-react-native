import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform
} from 'react-native';


import TNImageButton from '../common/TNImageButton'

export default class TNHomeView extends Component {

    render() {
        return(
            <View style={styles.container}>
                <View style={{flexDirection: 'row' , height: 34, justifyContent: 'center'}}>
                    <Image 
                        style={{width: 200}}
                        resizeMode={'contain'}
                        source={{uri: 'splash_screen'}}
                    />
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 80}} >
                    <TNImageButton 
                        onClickButton={
                            ()=> {
                                console.warn('Test Ja')
                            }
                        }
                        styleParentView={{margin: 25}}
                        sourceImage={'ic_camera'}
                    />
                    <TNImageButton 
                        styleParentView={{margin: 25}}
                        sourceImage={'ic_time'}
                    />
                    
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}} >
                    <TNImageButton 
                        styleParentView={{margin: 25}}
                        sourceImage={'ic_history'}
                    />
                    <TNImageButton 
                        styleParentView={{margin: 25}}
                        sourceImage={'ic_opendoor'}
                    />
                </View>
            </View>
        )
    }
}


const styles = {
    container: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 64 : 56,
    }
}
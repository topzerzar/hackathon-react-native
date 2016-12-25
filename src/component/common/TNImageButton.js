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

export default class TNImageButton extends Component {

    render() {
        return(
            <View style={this.props.styleParentView}>
                <TouchableOpacity onPress={this.props.onClickButton} >
                    <Image
                        source={{uri: this.props.sourceImage}}
                        style={styles.imageIcon}
                    />
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    imageIcon: {
        width: 80,
        height: 80,
    }
}) 

TNImageButton.propTypes = {
    onClickButton: PropTypes.func,
    sourceImage: PropTypes.string.isRequired,
    styleParentView : PropTypes.style,
}
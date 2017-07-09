/**
 * Created by ananyagoel on 10/07/17.
 */

/**
 * Created by ananyagoel on 10/07/17.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

export  default class AddForm extends Component{
    static navigationOptions = {
        title: 'AddForm',
    };
    render(){
        const { navigate } = this.props.navigation;

        return(
            <TouchableHighlight style={styles.button}
                                onPress = {this.onPress.bind(this)}>
                <Text style={styles.text}>
                    Add todo
                </Text>
            </TouchableHighlight>
        )
    }
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:"#000",
        padding:10,
        marginBottom:3
    },
    text:{
        color:"#ffffff",
        textAlign:'center'
    }

})

AppRegistry.registerComponent('AddForm',()=>AddForm)
/**
 * Created by ananyagoel on 10/07/17.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native';


import { Actions } from 'react-native-router-flux';

export default class AddButton extends Component{


    constructor(){
        super();
    }
    onPress=Actions.AddForm

    render(){

        return(
            <TouchableHighlight
                style={styles.button}
            onPress ={this.onPress} >
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


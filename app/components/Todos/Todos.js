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
    View,
    Navigator
} from 'react-native';

export  default class Todos extends Component{
    render(){
        return(
            <Text>TODOS</Text>
        )
    }
}


AppRegistry.registerComponent('Todos',()=>Todos)
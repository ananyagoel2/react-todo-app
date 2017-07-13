/**
 * Created by ananyagoel on 13/07/17.
 */


import React, { Component } from 'react';
import {
    View,
    Dimensions
} from 'react-native';

import AndroidToolbar from '../AndroidToolbar/AndroidToolbar';
import AddButton from '../AddButton/AddButton';
import Todos from "../Todos/Todos";

export default class homeScreen extends Component{
    render(){
        return(
        <View style = {styles.screen}>
            <AndroidToolbar />
            <AddButton />
            <Todos/>
        </View>
        )
    }
}

const styles={
    screen:{
        backgroundColor:'#2b4970',
        height:Dimensions.get('window').height
    }
}
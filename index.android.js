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
    Dimensions
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';

import Todos from './app/components/Todos/Todos';
import AndroidToolbar from './app/components/AndroidToolbar/AndroidToolbar';
import AddButton from './app/components/AddButton/AddButton';
import AddForm from './app/components/AddForm/AddForm';


class todosnav extends Component{

    render(){
        const { navigate } = this.props.navigation;

        return(
            <View style= {styles.screen}>
                <AndroidToolbar/>
                <AddButton />
                <Todos  title="todos"/>
            </View>
        )
    }
}

const mobiletodos = StackNavigator({
    Home: { screen: todosnav},
    AddForm:{screen:AddForm},
    AddButton:{screen:AddButton}
},{
    headerMode: 'none'
});


const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#2b4970",
        height:Dimensions.get('window').height,
    }
})

AppRegistry.registerComponent('mobiletodos',()=>mobiletodos)
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
    View
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';

import Todos from './app/components/Todos/Todos';

export  default class mobiletodos extends Component{
    renderScene(route,navigator){
        switch (route.id){
            case 'todos':
                return(
                    <View style= {styles.screen}>
                        <Todos navigator ={navigator} title="todos"/>
                    </View>
                )
        }
    }
    render(){
        return(
            < Navigator
            initialRoute={{'id':todos}}
            renderScene ={this.renderScene}
            configureScene = {(route, routeStack)=> Navigator.SceneConfigs.FloatFromBottom}
            />
        )
    }
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#2b4970"
    }
})

AppRegistry.registerComponent('mobiletodos',()=>mobiletodos)
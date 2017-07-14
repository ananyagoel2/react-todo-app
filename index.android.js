/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import AddForm from './app/components/AddForm/AddForm';
import homeScreen from './app/components/HomeScreen/homeScreen';
import TodoDetails from './app/components/TodoDetails/TodoDetails';
import EditForm from './app/components/EditForm/EditForm';


export default class mobiletodos extends Component{

    render(){

        return(
            <Router>
                <Scene key ="root">
                    <Scene key = "HomeScreen" component={homeScreen} title="TODOS" initial={true} hideNavBar={true}/>
                    <Scene key ="AddForm" component ={AddForm} title ="AddForm" hideNavBar={true}/>
                    <Scene key ="TodoDetails" component={TodoDetails} hideNavBar={true}/>
                    <Scene key ="EditForm" component ={EditForm} hideNavBar={true} />
                </Scene>
            </Router>
        )
    }
}


AppRegistry.registerComponent('mobiletodos',()=>mobiletodos)




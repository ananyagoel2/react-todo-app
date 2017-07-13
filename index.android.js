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
    Dimensions,
    TouchableHighlight
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';

import { Router, Scene } from 'react-native-router-flux';


import Todos from './app/components/Todos/Todos';
import AndroidToolbar from './app/components/AndroidToolbar/AndroidToolbar';
import AddButton from './app/components/AddButton/AddButton';
import AddForm from './app/components/AddForm/AddForm';
import homeScreen from './app/components/HomeScreen/homeScreen';

export default class todosnav extends Component{

    render(){
        const { navigate } = this.props.navigation;

        // return(
        //     <View style= {styles.screen}>
        //         <AndroidToolbar />
        //         <AddButton />
        //         <Todos  title="todos"/>
        //     </View>
        // )
        return(
            <Router>
                <Scene key ="root">
                    {/*<Scene key = "AndroidToolbar" component = {AndroidToolbar}/>*/}
                    {/*<Scene key ="AddButton" component ={AddButton} />*/}
                    <Scene key = "HomeScreen" component={homeScreen} title="Todos" initial={true} hideNavBar={true}/>
                    <Scene key ="AddForm" component ={AddForm} title ="AddForm" hideNavBar={true}/>
                </Scene>
            </Router>
        )
    }
}

const mobiletodos = StackNavigator({
    Home: { screen: todosnav},
    AddForm:{screen:AddForm}
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




//
// import React, {Component} from 'react';
// import {AppRegistry, Text, View, Navigator, StyleSheet, Dimensions} from 'react-native';
//
// import AndroidToolbar from './app/components/AndroidToolbar/AndroidToolbar';
// import Todos from './app/components/Todos/Todos';
// import AddButton from './app/components/AddButton/AddButton';
// import AddForm from './app/components/AddForm/AddForm';
//
// export default class mobiletodos extends Component{
//     renderScene(route, navigator){
//         switch(route.id){
//             case 'todos':
//                 return (
//                     <View style={styles.screen}>
//                         <AndroidToolbar />
//                         <AddButton navigator={navigator} />
//                         <Todos navigator={navigator} title="todos" />
//                     </View>
//                 )
//             case 'add':
//                 return (
//                     <View style={styles.screen}>
//                         <AndroidToolbar title="Add Todo" />
//                         <AddForm navigator={navigator} title="add" />
//                     </View>
//                 )
//         }
//     }
//
//     render(){
//         return(
//             <Navigator
//                 initialRoute={{id: 'todos'}}
//                 renderScene={this.renderScene}
//                 configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
//             />
//         )
//     }
// }
//
// const styles = StyleSheet.create({
//     screen: {
//         backgroundColor:'#2b4970',
//         height:Dimensions.get('window').height
//     }
// });
//
//
// AppRegistry.registerComponent('mobiletodos', () => mobiletodos);
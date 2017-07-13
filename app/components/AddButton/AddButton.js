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


import { Actions } from 'react-native-router-flux';


import AddForm from '../AddForm/AddForm';

export default class AddButton extends Component{

    static navigationOptions = {
        title: 'AddButton',
    };

    constructor(){
        super();
        // onPress = this.onPress.bind(this)

    }
    onPress=Actions.AddForm

    render(){

        // const { navigate } = this.props.navigation;

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


// const AddButtonNav = StackNavigator({
//     Home: { screen: AddButtonClass},
//     AddForm:{screen:AddForm}
// },{
//     headerMode: 'none'
// });


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



// AppRegistry.registerComponent('AddButton',()=>AddButton)




// import React, {Component} from 'react';
// import {AppRegistry, Text, View, StyleSheet, TouchableHighlight} from 'react-native';
//
// export default class AddButton extends Component{
//
//     onPress(){
//         this.props.navigator.push({
//             id: 'add'
//         });
//     }
//
//     render(){
//         return(
//             <TouchableHighlight
//                 style={styles.button}
//                 onPress={this.onPress.bind(this)}>
//                 <Text style={styles.text}>Add Todo</Text>
//             </TouchableHighlight>
//         )
//     }
// }
//
// const styles = StyleSheet.create({
//     button: {
//         backgroundColor:'#000000',
//         padding:10,
//         marginBottom:10
//     },
//     text:{
//         color:'#ffffff',
//         textAlign:'center'
//     }
// });

// AppRegistry.registerComponent('AddButton', () => AddButton);
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


import {
    StackNavigator,
} from 'react-navigation';

// import AddForm from '../AddForm/AddForm';

export default  class AddButtonClass extends Component{

    static navigationOptions = {
        title: 'AddButton',
    };
    constructor(){
        super();
        onPress = {this.onPress.bind(this)}>

    }
    // onPress(){
    //     navigate('AddForm')
    //     tit
    // }

    render(){

        const { navigate } = this.props.navigation;

        return(
            <TouchableHighlight style={styles.button}
                                onPress={() => navigate('AddForm')}
                                title="AddForm">
            // onPress = {this.onPress.bind(this)}>
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



AppRegistry.registerComponent('AddButton',()=>AddButton)
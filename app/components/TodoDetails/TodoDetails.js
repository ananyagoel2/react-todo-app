/**
 * Created by ananyagoel on 14/07/17.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    AppRegistry,
    Share,
    AsyncStorage,
    Dimensions
} from 'react-native';

import AndroidToolbar from '../AndroidToolbar/AndroidToolbar';

import { Actions } from 'react-native-router-flux';



export  default class TodoDetails extends Component{

    onEdit(){
        console.log("onEdit")
        Actions.EditForm(this.props);
    }
    onDelete(){

    }
    onShare(){

    }

    render(){
        return(



            <View style={styles.screen}>
                <AndroidToolbar title={this.props.text}/>
                <View style = {styles.container}>

                    <TouchableHighlight style={styles.editbutton} onPress={this.onEdit.bind(this)}>
                        <View>
                        <Text style={styles.text} > Edit </Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.delbutton}
                        onPress={this.onDelete.bind(this)}>
                        <View>
                        <Text style={styles.text} > Delete </Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                    style={styles.sharebutton}
                    onPress={this.onShare.bind(this)}>
                        <View>
                    <Text style={styles.text} > Share To-Do </Text>
                        </View>
                    </TouchableHighlight>

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    screen:{
        backgroundColor:'#2b4970',
        height:Dimensions.get('window').height
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'#b0d4ff',
        padding:20
    },
    delbutton:{
        backgroundColor:'#800000',
        padding:10
    },
    editbutton:{
        backgroundColor:'#397d02',
        padding:10
    },
    sharebutton:{
        backgroundColor:'#ff3322',
        padding:10
    },
    text:{
        color:'#ffffff'
    }

})

AppRegistry.registerComponent('TodoDetails', () => TodoDetails)
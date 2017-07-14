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

    constructor(props){
        super(props);
        this.state={
            id:this.props.id,
            text:this.props.text,
            completed:this.props.completed
        }
    }


    onEdit(){
        console.log("onEdit")
        let todo={
            id:this.state.id,
            text:this.state.text,
            completed:this.state.completed
        }
        Actions.EditForm(todo);
    }
    onDelete(){

        AsyncStorage.getItem('todos')
            .then((value)=>{

                let todos=JSON.parse(value)

                for (i=0;i<todos.length;i++){
                    if (todos[i].id==this.state.id){
                        todos.splice(i,1)
                    }
                }

                AsyncStorage.setItem('todos',JSON.stringify(todos))
                    .then(()=>
                        Actions.HomeScreen())


            })

    }
    onShare(){
        Share.share({
            message:this.state.text
        })
            .then(()=>
            {
                Actions.HomeScreen()
            })
            .catch((error)=>console.log(error))
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
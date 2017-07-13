import React, {Component} from 'react';
import {AppRegistry, Text, View, Dimensions, Button,TextInput, Switch, AsyncStorage} from 'react-native';

import AndroidToolbar from '../AndroidToolbar/AndroidToolbar';
import AddButton from '../AddButton/AddButton';

import { Actions } from 'react-native-router-flux';


export default class AddForm extends Component{

    constructor(){
        super();
        this.state={
            id:'',
            text:'',
            completed:false,
            todos:[]
        }
    }
    componentDidMount(){
        this.generateId()
    }

    getTodos(){
        AsyncStorage.getItem('todos').then((value)=>
        {
            if(value!=undefined){
                this.setState({todos:JSON.parse(value)})
            }
        })
    }



    generateId(){
        let id = Math.floor(Math.random()*10000000)
        this.setState({id})
    }
    onTextChange(value){
        this.setState({
            text:value
        })
    }
    onCompletedChange(value){
        this.setState({
            completed:value
        })
    }

    onSubmit(){
        console.log("Adding TODO");
        let todos = this.state.todos;

        todos.push({
            id:this.state.id,
            text:this.state.text,
            completed:this.state.completed
        });

        AsyncStorage.setItem('todos',JSON.stringify(todos))
            .then(()=>
                Actions.HomeScreen)
    }

    render(){
        return(
            <View style = {styles.screen}>
                <AndroidToolbar title='Add TO-DO' />
                <View style = {styles.addForm}>
                <TextInput
                    value ={this.state.text}
                    placeholder="TODO text"
                    onChangeText={(value)=> this.onTextChange(value)}
                />
                <View style = {styles.completed}>
                    <Text>
                        Completed:
                    </Text>
                    <Switch
                    value={this.state.completed}
                    onValueChange={(value)=> this.onCompletedChange(value)}
                    />
                </View>
                <View style={styles.submit}>
                    <Button
                        style={styles.btn}
                        onPress={this.onSubmit.bind(this)}
                        title="Submit"
                        color="black"
                    />
                </View>
                </View>
            </View>
        )
    }
}

const styles={
    screen:{
        backgroundColor:'#2b4970',
        height:Dimensions.get('window').height
    },
    completed:{
        flexDirection:'row'
    },
    addForm:{
        backgroundColor:'#b0d4ff',
        padding:20
    },
    submit:{
        marginTop:20
    }
}
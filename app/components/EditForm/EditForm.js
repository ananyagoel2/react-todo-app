/**
 * Created by ananyagoel on 14/07/17.
 */

import React, {Component} from 'react';
import { Text, View, Dimensions, Button,TextInput, Switch, AsyncStorage} from 'react-native';

import AndroidToolbar from '../AndroidToolbar/AndroidToolbar';

import { Actions } from 'react-native-router-flux';


export default class EditForm extends Component{

    constructor(props){
        super(props);
        this.state={
            id:this.props.id,
            text:this.props.text,
            completed:this.props.completed
        }
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

        AsyncStorage.getItem('todos')
            .then((value)=>{
                let todos=JSON.parse(value)

                for (i=0;i<todos.length;i++){
                    if (todos[i].id==this.state.id){
                        todos.splice(i,1)
                    }
                }
                todos.push({
                    id:this.state.id,
                    text:this.state.text,
                    completed:this.state.completed
                });

                AsyncStorage.setItem('todos',JSON.stringify(todos))
                    .then(()=>
                        Actions.HomeScreen())
            })



//        let todos = this.state.todos;


    }

    render(){
        console.log("Edit"+this.props.text)
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
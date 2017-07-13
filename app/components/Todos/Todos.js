/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    ListView,
    TouchableHighlight,
} from 'react-native';

export  default class Todos extends Component{

    constructor(){
        super();
        const ds =new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!==r2})
        this.state={
            todoDataSource:ds
        }
        this.pressRow= this.pressRow.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    componentDidMount(){
        this.geTodos()
    }

    componentWillMount(){
        this.geTodos()
    }
    renderRow(todo){
        console.log(todo)
        return(
            <TouchableHighlight onPress={()=>{
                this.pressRow(todo)
            }}>
                <View style={styles.row}>
                    <Text style={styles.text}>
                        {todo.text}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }
    pressRow(todo){
        console.log(todo)
    }

    geTodos(){
        let todos=[
            {
                text:'Todo One',
                completed:false
            },
            {
                text:'Todo Two',
                completed:false
            },
            {
                text:'Todo three',
                completed:true
            }
        ];
        this.setState({
            todoDataSource:this.state.todoDataSource.cloneWithRows(todos)
        })

    }

    render(){
        return(
<ListView dataSource={this.state.todoDataSource} renderRow={this.renderRow} />        )
    }
}

const styles={
    row:{
        flexDirection:'row',
        justifyContent:'center',
        padding:12,
        backgroundColor:'#b0d4ff',
        marginBottom:3
    },
    text:{
        flex:1
    }
}

AppRegistry.registerComponent('Todos',()=>Todos)
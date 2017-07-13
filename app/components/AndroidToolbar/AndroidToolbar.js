/**
 * Created by ananyagoel on 10/07/17.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ToolbarAndroid
} from 'react-native';




export  default class AndroidToolbar extends Component{
    static defaultProps={
        title:'MobileTodos'
    }
    render(){
        return(
            <View>
                <ToolbarAndroid
                style={styles.toolbar}
                title={this.props.title}
                titleColor="white"
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    toolbar:{
        height:58,
        backgroundColor:"#2b4970"
    }
})

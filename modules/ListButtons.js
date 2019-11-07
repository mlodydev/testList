import React, {Component} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        position: 'absolute',
        bottom: 0,

    },
    button: {
        flex: 1,
    }
});

class ListButtons extends Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <View style={styles.container}>
                <Button style={styles.button} title='Refresh list'/>
                <Button style={styles.button} title='Sort by author'/>
                <Button style={styles.button} title='Sort by id'/>
            </View>
        );
    }
}

export default ListButtons;
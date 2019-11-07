import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import MyButton from './MyButton';

const screenWidth = Dimensions.get('screen').width;

class ListButtons extends Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <View style={styles.container}>
                <MyButton title='Refresh list'/>
                <MyButton title='Sort by author'/>
                <MyButton title='Sort by id'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        width: screenWidth,
        justifyContent: 'space-around',
        padding: 3,
        borderTopColor: '#058cd9',
        borderTopWidth: 1,
    },
    button: {
        color: '#058cd9',
        paddingVertical: 5,
    }
});

export default ListButtons;
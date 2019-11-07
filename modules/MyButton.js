import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

class MyButton extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
                <Text style={styles.btnText}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 15,
        backgroundColor: '#058cd9',
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    btnText:{
        color: 'white',
        fontSize: 16,
    },
});

export default MyButton;
import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import MyButton from './MyButton';

const screenWidth = Dimensions.get('screen').width;

const ListButtons = (props) =>{
    return(
        <View style={styles.container}>
            <MyButton onPress={props.onPressSearch} title='Search'/>
            <MyButton onPress={props.onPressSortAuthor} title='Sort by author'/>
            <MyButton onPress={props.onPressSortId} title='Sort by id'/>
        </View>
    );
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
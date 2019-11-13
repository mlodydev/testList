import React from 'react';
import { 
    View, 
    TextInput, 
    TouchableOpacity,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
} from 'react-native';

import MyButton from './MyButton';

const SearchBar = (props) => {
    return(
        <KeyboardAvoidingView style={styles.container}>
            <TextInput
                clearButtonMode = 'always'
                placeholder="Type..."
                onChangeText = {props.onChangeHandler}
                style={styles.input}
            />
            {/* <TouchableOpacity style={styles.hideIcon} onPress={props.onPressCancel}>
                <Text style={styles.btnText}>Hide</Text>
            </TouchableOpacity> */}
            <MyButton title="hide" onPress={props.onPressCancel}/>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#058cd9',
        padding: 3,
    },
    input: {
        flex: 1,
    },  
    hideIcon: {
        flex: 0.1,
        paddingVertical: 15,
        backgroundColor: '#058cd9',
        paddingHorizontal: 15,
    },
    btnText:{
        color: 'white',
        fontSize: 16,
    },
});

export default SearchBar;
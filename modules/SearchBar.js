import React from 'react';
import { 
    View, 
    TextInput, 
    StyleSheet,
} from 'react-native';

import MyButton from './MyButton';

const SearchBar = (props) => {
    return(
        <View style={styles.container}>
            <TextInput
                clearButtonMode = 'always'
                placeholder="Type..."
                onChangeText = {props.onChangeHandler}
                style={styles.input}
            />
            <MyButton title="hide" onPress={props.onPressCancel}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#058cd9',
        padding: 3,
        marginRight: 15,
    },
    input: {
        flex: 1,
        padding: 0,
        paddingLeft: 5,
    },
});

export default SearchBar;
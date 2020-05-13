import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const MyButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text style={styles.btnText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    backgroundColor: '#058cd9',
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
  },
});

export default MyButton;

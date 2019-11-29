import React, {useState} from 'react';
import { View, Text, StyleSheet, Linking} from 'react-native';

const Options=(props) =>{
  return(
    props.isMenuShown ?
    <View style={styles.options}>
        <Text onPress={()=>Linking.openURL(props.link).catch((error) => console.warn(error))}>
            Open in external browser
        </Text>
        <Text onPress={()=>props.setIsMenuShown(false)}>
            Back
        </Text>
    </View>
    :(null)
  );
}

const HeaderMenu = (props) => {
    const [isMenuShown, setIsMenuShown] = useState(false);
    return(
        <View style={styles.menu}>
            <Text onPress={()=>setIsMenuShown(!isMenuShown)}>
                Menu
            </Text>
            <Options isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} link={props.link}/>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {

    },
    options:{
        
    },
})

export default HeaderMenu
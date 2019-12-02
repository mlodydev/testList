import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ListItem =(props)=>{

    const onPressHandler=()=>{
        props.navigation('OpenBrowser', {uri: props.pageUrl});
    }

    return(
        <View style={styles.container}>
            <Image style={styles.image}
                source={{uri: props.imageUrl}}
            />
            <View style={styles.details}>
                <View style={styles.upperDetails}>
                    <Text style={styles.name}>{props.name}</Text>
                    <View style={styles.idView}>
                        <Text style={styles.id}>{props.id}</Text>
                    </View>
                </View>
                <View style={styles.urlView}>
                    <Text onPress={onPressHandler} style={styles.url}><Text style={styles.urlBold}>Url:</Text> {props.pageUrl}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'stretch',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 5,
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 10,
        alignSelf: 'center',
    },
    details: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 5,
    },
    upperDetails: {
        flexDirection: 'row',
        flex: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 5,
    },  
    name: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 22,
        flexWrap: 'wrap',
    },
    idView: {
        borderRadius: 90,
        backgroundColor: '#058cd9',
        width: 32,
        height: 32,
        justifyContent: "center",
        alignItems: "center",
    },  
    id: {
        color: 'white',
        fontSize: 12,
    },
    urlView:{
        flex: 1.3
    },
    url: {
        color: 'grey',
        fontSize: 13,
    },
    urlBold:{
        fontWeight: 'bold', 
        color:'#333',
    },
});

export default ListItem;    
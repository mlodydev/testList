import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import { useNavigationParam } from 'react-navigation-hooks';
import HeaderMenu from './HeaderMenu';
import { StyleSheet, View } from 'react-native';
import { Options } from './HeaderMenu';
import MaterialHeaderMenu from './MaterialHeaderMenu';

var paramsUri="";
const InternalBrowser = () => {
    paramsUri = useNavigationParam('uri');
    return(
        <WebView 
            source = {{uri: paramsUri}}
            style = {styles.web}
        />
    );
}

InternalBrowser.navigationOptions = {
    headerRight: () => (
    // put here whole Menu component- icon and menu componenet
    // <HeaderMenu link={paramsUri}/>
    <MaterialHeaderMenu link={paramsUri}/>
    )
    
}

const styles = StyleSheet.create({
    container:{
        
    },
    web:{
        flex: 1,
    }
})

export default InternalBrowser;
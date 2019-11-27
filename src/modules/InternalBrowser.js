import React from 'react';
import { WebView } from 'react-native-webview';
import { useNavigationParam } from 'react-navigation-hooks';

const InternalBrowser = () => {
    const paramsUri = useNavigationParam('uri');
    return(
            <WebView 
                source = {{uri: paramsUri}}
            />
    );
}

export default InternalBrowser;
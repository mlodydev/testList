import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/createStore';
import AppNavigator from './src/modules/AppNavigator'

const  App = () => {
        return(
            <Provider store={store}>
                <AppNavigator />
            </Provider> 
        );
}

export default App;
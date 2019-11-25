import React, { Component } from 'react';
import MainScreen from './src/modules/MainScreen'
import { Provider } from 'react-redux';
import { store } from './src/redux/createStore';

const  App = () => {
        return(
            <Provider store={store}>
                <MainScreen />
            </Provider> 
        );
}

export default App;
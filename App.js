import React, {Component} from 'react';
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

import ListComp from './modules/ListComp';

const DATA_URL = 'https://picsum.photos/v2/list';

const App = () =>{
  return(
    <ListComp url={DATA_URL}/>
  );
}

export default App;
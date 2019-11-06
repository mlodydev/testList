/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';  

import ListItem from './modules/ListItem';

// const itemImageSource= 'https://statics.sportskeeda.com/editor/2018/03/a4a7b-1520474015-800.jpg';
// const itemName = 'Michael Jordan'
// const itemId = 23;
// const itemUrl = 'https://pl.wikipedia.org/wiki/Michael_Jordan';

class App extends Component{
  render(){
    return(
      <View>
        <FlatList
          data={[
            {id: '1'},
            {id: '2'},
            {id: '3'},
            {id: '4'},
            {id: '5'},
            {id: '6'},
            {id: '7'},
            {id: '8'},
          ]}
          renderItem={({item}) => <ListItem id={item.id}/>}
        />
      </View>
    );
  }
}

export default App;

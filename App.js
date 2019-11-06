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

class App extends Component{
  render(){
    return(
      <View>
        <FlatList
          data={[
            {imageUrl: "https://statics.sportskeeda.com/editor/2018/03/a4a7b-1520474015-800.jpg", 
            name: 'Michael Jordan', 
            pageUrl: 'whatever.com', 
            id: '1'},
            {imageUrl: "https://statics.sportskeeda.com/editor/2018/03/a4a7b-1520474015-800.jpg", 
            name: 'Michael Jordan', 
            pageUrl: 'whatever.com', 
            id: '2'},
            {imageUrl: "https://statics.sportskeeda.com/editor/2018/03/a4a7b-1520474015-800.jpg", 
            name: 'Michael Jordan', 
            pageUrl: 'whatever.com', 
            id: '3'},
          ]}
          renderItem={({item}) => <ListItem id={item.id} imageUrl={item.imageUrl} name={item.name} pageUrl={item.pageUrl}/>}
        />
      </View>
    );
  }
}

export default App;

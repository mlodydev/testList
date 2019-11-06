/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  FlatList,
} from 'react-native';  

import ListItem from './modules/ListItem';

const dataUrl = 'https://picsum.photos/v2/list';

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
            pageUrl: 'whatever.com/whatever.com/whatever.com/whatever.com/whatever.com/whatever.com/whatever.com/whatever.com', 
            id: '2'},
            {imageUrl: "https://statics.sportskeeda.com/editor/2018/03/a4a7b-1520474015-800.jpg", 
            name: 'Michael Jordan', 
            pageUrl: 'whatever.com/whatever.com/whatever.com/whatever.com/whatever.com/whatever.com', 
            id: '3'},
            {imageUrl: "https://statics.sportskeeda.com/editor/2018/03/a4a7b-1520474015-800.jpg", 
            name: 'Michael Jordan12345y78781212313812378', 
            pageUrl: 'whatever.com', 
            id: '4'},
            {imageUrl: "https://statics.sportskeeda.com/editor/2018/03/a4a7b-1520474015-800.jpg", 
            name: 'Michaelsadkoasdkashdsauo Jordan12345y78781212313812378', 
            pageUrl: 'whatever.com/whatever.com/whatever.com/whatever.com/whatever.com/whatever.com/whatever.com/whatever.com', 
            id: '5'},
          ]}
          renderItem={({item}) => <ListItem id={item.id} imageUrl={item.imageUrl} name={item.name} pageUrl={item.pageUrl}/>}
        />
      </View>
    );
  }
}

export default App;

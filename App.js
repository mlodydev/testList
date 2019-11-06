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

const DATAURL = 'https://picsum.photos/v2/list';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      data: null,
    };
  }

  fetchApiData(){
    fetch(DATAURL)
    .then(response => response.json())
    .then(data => this.setState( {data} ))
    .catch((error) => console.error(error) );
  }

  componentDidMount(){
    this.fetchApiData();
  }

  render(){
    return(
      <View>
        <FlatList
          data = {this.state.data}
          renderItem={({item}) => <ListItem id={item.id} imageUrl={item.download_url} name={item.author} pageUrl={item.url}/>}
        />
      </View>
    );
  }
}

export default App;

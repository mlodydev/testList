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
  Text,
  ActivityIndicator,
} from 'react-native';  

import ListItem from './modules/ListItem';

const DATAURL = 'https://picsum.photos/v2/list';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      data: null,
      isLoading: true,
    };
  }

  fetchApiData(){
    fetch(DATAURL)
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        data: responseJson,
        isLoading: false
      })
    })
    .catch((error) => console.log(error));
  }

  componentDidMount(){
    this.fetchApiData();
  }

  render(){
    if(this.state.isLoading){
      return(
        <View>
        <ActivityIndicator size='large' color='#058cd9'/>
      </View>  
      )
    }
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

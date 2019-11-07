import React, {Component} from 'react';
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  StyleSheet
} from 'react-native';  

import ListItem from './modules/ListItem';

const DATA_URL = 'https://picsum.photos/v2/list';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      data: null,
      isLoading: false,
    };
  }

  fetchApiData(){
    this.setState({
      isLoading: true,
    })
    fetch(DATA_URL)
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        data: responseJson,
        isLoading: false
      })
    })
    .catch((error) => console.warn(error));
  }

  componentDidMount(){
    this.fetchApiData();
  }

  render(){
    const body = this.state.isLoading
    ? <View style={styles.loadingIndicator}>
        <ActivityIndicator size='large' color='#058cd9' show={this.state.isLoading}/>
      </View>
    : <FlatList
        data = {this.state.data}
        renderItem={({item}) => <ListItem id={item.id} imageUrl={item.download_url} name={item.author} pageUrl={item.url}/>}
      />

    return(
      <View style={styles.container}>  
        {body}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container:{
    flex: 1,
  },
});

export default App;
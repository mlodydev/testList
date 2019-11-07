import React, {Component} from 'react';
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  StyleSheet
} from 'react-native';  

import ListItem from './modules/ListItem';

const DATAURL = 'https://picsum.photos/v2/list';

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container:{
    flex: 1,
    display: 'flex',
  },
});

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
    .catch((error) => console.warn(error));
  }

  componentDidMount(){
    this.fetchApiData();
  }

  render(){
    let currentView;
    if(this.state.isLoading){
      currentView = <View style={styles.loadingIndicator}>
      <ActivityIndicator size='large' color='#058cd9' show={this.state.isLoading}/>
    </View>
    }
    else{
    currentView = <View>
      <FlatList
      data = {this.state.data}
      renderItem={({item}) => <ListItem id={item.id} imageUrl={item.download_url} name={item.author} pageUrl={item.url}/>}
      />
    </View>
    };

    return(
      <View style={styles.container}>  
        {currentView}
      </View>
    );

  }
}

export default App;
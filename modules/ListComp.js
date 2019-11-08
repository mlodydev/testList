import React, {Component} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet
} from 'react-native';  

import ListItem from './modules/ListItem';
import ListButtons from './modules/ListButtons';

const DATA_URL = 'https://picsum.photos/v2/list';

class ListComp extends Component{
  constructor(props){
    super(props);

    this.state = {
      data: null,
      isLoading: false,
    };
    this.fetchApiData = this.fetchApiData.bind(this);
    this.sortDataByAuthor = this.sortDataByAuthor.bind(this);
    this.sortDataById = this.sortDataById.bind(this);
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

  sortDataById(){
    const newData = [...this.state.data];
    newData.sort((a,b) => a.id - b.id);
    this.setState({
      data: newData,
    });
  }
  
  sortDataByAuthor(){
    const newData = [...this.state.data];
    newData.sort((a,b) => {
      if(a.author > b.author) return 1;
      else if(a.author < b.author) return -1;
      else return 0;
    });
    this.setState({
      data: newData,
    });
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
        <View style={styles.body}>
          {body}
        </View>
        <View style={styles.buttons}>
          <ListButtons onPressRefresh={this.fetchApiData} onPressSortAuthor={this.sortDataByAuthor} onPressSortId={this.sortDataById} />  
        </View>
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
  body: {
    flex: 1,
  },
  buttons: {
    flex: 0.1,
  },
});

export default ListComp;
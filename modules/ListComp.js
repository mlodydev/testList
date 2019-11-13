import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';  

import ListItem from './ListItem';
import ListButtons from './ListButtons';

const DATA_URL = 'https://picsum.photos/v2/list';

const EmptyListComponent =()=>(
  <View style={styles.emptyList}>
    <Text>
      No items in list.
    </Text>
  </View>
);

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
    this.onPressHandlerRefresh = this.onPressHandlerRefresh.bind(this);
    this.onPressHandlerSortAuthor = this.onPressHandlerSortAuthor.bind(this);
    this.onPressHandlerSortId = this.onPressHandlerSortId.bind(this);
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

  onPressHandlerRefresh(){
    this.fetchApiData();
  }

  onPressHandlerSortAuthor(){
    this.sortDataByAuthor();
  }

  onPressHandlerSortId(){
    this.sortDataById();
  }

  

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.listView}>
          <FlatList
            data = {this.state.data}
            contentContainerStyle = {styles.list}
            renderItem={({item}) => <ListItem id={item.id} imageUrl={item.download_url} name={item.author} pageUrl={item.url}/>}
            refreshing={this.state.isLoading}
            onRefresh={this.onPressHandlerRefresh}
            ListEmptyComponent = {<EmptyListComponent/>}
          />
        </View>
        <View style={styles.buttons}>
          <ListButtons onPressRefresh={this.onPressHandlerRefresh} onPressSortAuthor={this.onPressHandlerSortAuthor} onPressSortId={this.onPressHandlerSortId} />  
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  listView: {
    flex: 1,
  },  
  list: {
    flexGrow: 1,
  },
  buttons: {
    flex: 0.1,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    // borderColor: 'black',
    // borderWidth: 1,
  },
});

export default ListComp;
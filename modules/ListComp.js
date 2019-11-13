import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import ListItem from './ListItem';
import ListButtons from './ListButtons';
import SearchBar from './SearchBar';

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
      filterData: null,
      isLoading: false,
      showSearchBar: false,
      filterText: '',
    };


    this.fetchApiData = this.fetchApiData.bind(this);
    this.sortDataByAuthor = this.sortDataByAuthor.bind(this);
    this.sortDataById = this.sortDataById.bind(this);
    this.refreshHandler = this.refreshHandler.bind(this);
    this.onPressHandlerSortAuthor = this.onPressHandlerSortAuthor.bind(this);
    this.onPressHandlerSortId = this.onPressHandlerSortId.bind(this);
    this.onPressHandlerSearch = this.onPressHandlerSearch.bind(this);
    this.onPressHandlerCancel = this.onPressHandlerCancel.bind(this);
    this.onSearchChangeText = this.onSearchChangeText.bind(this);
    this.filterByAuthor = this.filterByAuthor.bind(this);
  }

  fetchApiData(){
    this.setState({
      isLoading: true,
    })
    fetch(this.props.url)
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        data: responseJson,
        filterData: responseJson,
        isLoading: false
      })
    })
    .catch((error) => console.warn(error));
  }

  componentDidMount(){
    this.fetchApiData();
  }

  //Sorting

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

  //Filtering

  filterByAuthor(text){
    
    const newData = [...this.state.data];
    const newFilteredData = newData.filter(item =>{
      const textData = text.toUpperCase();
      const itemData = item.author.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    
    this.setState({
      filterData: newFilteredData,
    });
  }

  //Event Handlers

  refreshHandler(){
    this.fetchApiData();
  }

  onSearchChangeText(text){
    this.setState({filterText: text});
    this.filterByAuthor(text);
    // console.warn(text);
  }

  onPressHandlerSearch(){
    this.setState({showSearchBar: true});
  }

  onPressHandlerSortAuthor(){
    this.sortDataByAuthor();
  }

  onPressHandlerSortId(){
    this.sortDataById();
  }

  onPressHandlerCancel(){
    this.setState({showSearchBar: false});
    this.onSearchChangeText('');
  }

  render(){
   
    const bottomMenu = this.state.showSearchBar
      ? <SearchBar 
          onPressCancel = {this.onPressHandlerCancel}
          onChangeHandler = {(text)=>this.onSearchChangeText(text)}
          value={this.state.filterText}
        />
      : <ListButtons 
      onPressSearch={this.onPressHandlerSearch} 
      onPressSortAuthor={this.onPressHandlerSortAuthor} 
      onPressSortId={this.onPressHandlerSortId} 
      />  

    return(
      <View style={styles.container}>
        <View style={styles.listView}>
          <FlatList
            data = {this.state.filterData}
            contentContainerStyle = {styles.list}
            renderItem={({item}) => <ListItem id={item.id} imageUrl={item.download_url} name={item.author} pageUrl={item.url}/>}
            refreshing={this.state.isLoading}
            onRefresh={this.refreshHandler}
            ListEmptyComponent = {<EmptyListComponent/>}
          />
        </View>
        <View style={styles.buttons}>
        {bottomMenu}
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
  },
});

export default ListComp;
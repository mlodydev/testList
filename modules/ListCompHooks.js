import React, { useState, useEffect } from 'react';

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

export default ListCompHooks = (props) =>{
    const [isLoading, setIsLoading] = useState(props.isLoading);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [filterText, setFilterText] = useState('');
    const [filterData, setFilterData] = useState(props.data);   

    //sorting

    const sortDataById=()=>{
        // console.warn(props.data[0].author);
        const newData = [...props.data];
        newData.sort((a,b) => a.id - b.id);
        setFilterData(newData);
    }

    const sortDataByAuthor=()=>{
        const newData = [...props.data];
        newData.sort((a,b) => {
            if(a.author > b.author) return 1;
            else if(a.author < b.author) return -1;
            else return 0;
        });
        setFilterData(newData);
    }    

    //filtering
    const filterByAuthor=(text)=>{
        const newData = [...props.data];
        const newFilteredData = newData.filter(item =>{
            const textData = text.toUpperCase();
            const itemData = item.author.toUpperCase();  
            return itemData.indexOf(textData) > -1;
        });
        setFilterData(newFilteredData);
    }

    const bottomMenu = showSearchBar
        ? <SearchBar 
            onPressCancel = {()=>{setShowSearchBar(false); filterByAuthor('');}}
            onChangeHandler = {(text)=>{setFilterText(text); filterByAuthor(text);}}
            value={filterText}
        />
        : <ListButtons 
        onPressSearch={()=>setShowSearchBar(true)}
        onPressSortAuthor={sortDataByAuthor}
        onPressSortId={sortDataById}
        />;

    return(
        <View style={styles.container}>
            <View style={styles.listView}>
            <FlatList
                data = {filterData}
                contentContainerStyle = {styles.list}
                renderItem={({item}) => <ListItem id={item.id} imageUrl={item.download_url} name={item.author} pageUrl={item.url}/>}
                refreshing={isLoading}
                onRefresh={props.fetchDataMethod}
                ListEmptyComponent = {<EmptyListComponent/>}
            />
            </View>
            <View style={styles.buttons}>
                {bottomMenu}
            </View>
        </View>
    );
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
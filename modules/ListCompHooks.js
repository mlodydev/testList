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
    const [data, setData] = useState(null);
    const [dataRequest, setDataRequest] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [filterText, setFilterText] = useState('');
    const [bottomMenu, setBottomMenu] = useState(null);
    const [filterData, setFilterData] = useState(null);

    const fetchApiData=()=>{
        setIsLoading(true);
        fetch(props.url)
            .then(response => response.json())
                .then(responseJson => {
                    setIsLoading(false);
                    setData(responseJson);
                    setFilterData(responseJson);
        })
        .catch((error) => console.warn(error));
    }

    useEffect(()=>{
        fetchApiData();
        // console.warn("fetchuje");
    }, [dataRequest]);

    useEffect(()=>{
        // console.warn("showBar");
        setBottomMenu(showSearchBar
        ? <SearchBar 
            onPressCancel = {()=>setShowSearchBar(false)}
            // onChangeHandler = {(text)=>setFilterText(text)}
            onChangeHandler = {(text)=>{setFilterText(text); filterByAuthor(text);}}
            value={filterText}
        />
        : <ListButtons 
        onPressSearch={()=>setShowSearchBar(true)}
        onPressSortAuthor={sortDataByAuthor}
        onPressSortId={sortDataById}
        />);
        setFilterText('');
        filterByAuthor('');
    }, [showSearchBar]);

    // useEffect(()=>{
    //     if(data!==null) filterByAuthor(filterText);
    //     // console.warn(filterText);
    // }, [filterText]);

    //sorting

    const sortDataById=()=>{
        const newData = [...data];
        newData.sort((a,b) => a.id - b.id);

        setData(newData);
        setFilterData(data);
    }

    const sortDataByAuthor=()=>{
        const newData = [...data];
        newData.sort((a,b) => {
            if(a.author > b.author) return 1;
            else if(a.author < b.author) return -1;
            else return 0;
        });

        setData(newData);
        setFilterData(newData);
    }    

    //filtering
    const filterByAuthor=(text)=>{
        const newData = [...data];
        const newFilteredData = newData.filter(item =>{
            const textData = text.toUpperCase();
            const itemData = item.author.toUpperCase();    
            return itemData.indexOf(textData) > -1;
        });
        setFilterData(newFilteredData);
    }

    return(
        <View style={styles.container}>
            <View style={styles.listView}>
            <FlatList
                data = {filterData}
                contentContainerStyle = {styles.list}
                renderItem={({item}) => <ListItem id={item.id} imageUrl={item.download_url} name={item.author} pageUrl={item.url}/>}
                refreshing={isLoading}
                onRefresh={()=>setDataRequest(!dataRequest)}
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
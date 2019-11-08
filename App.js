import React, {Component} from 'react';
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

import ListButtons from './modules/ListButtons';
import ListComp from './modules/ListComp';

const App = () =>{
  return(
    <View style={styles.container}>
      <View style={styles.body}>
        <ListComp />
      </View>
      <View style={styles.buttons}>
        <ListButtons onPressRefresh={this.fetchApiData} onPressSortAuthor={this.sortDataByAuthor} onPressSortId={this.sortDataById} />  
      </View>
    </View>
  );
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

export default App;
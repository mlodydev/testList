import React, {Component} from 'react';
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  StyleSheet
} from 'react-native';  

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
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

export default App;
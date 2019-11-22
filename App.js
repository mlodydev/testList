import React, {Component, useEffect,useState} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import ListCompHooks from './modules/ListCompHooks';

const DATA_URL = 'https://picsum.photos/v2/list';

const store = createStore(rootReducer);

class App extends Component{
  constructor(props){
    super(props);
    // this.state = {
    //   data: [],
    //   isLoading: false
    // }
    this.fetchApiData = this.fetchApiData.bind(this); 
  }

  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  fetchApiData(){
    // setIsLoading(true);
    this.setState({isLoading: true});
    fetch(DATA_URL)
        .then(response => response.json())
            .then(responseJson => {
                // setIsLoading(false);
                // setData(responseJson);
                this.setState({
                  isLoading: false,
                  data: responseJson
                });
    })
    .catch((error) => console.warn(error));
  }
  
  // useEffect(()=>{
  //   fetchApiData();
  // }, []);
  componentDidMount(){
    this.fetchApiData();
  }

  render(){
    return(
      <Provider store={store}>
        <ListCompHooks isLoading={this.state.isLoading} data={this.state.data} fetchDataMethod={this.fetchApiData} />
      </Provider>
    );
  }
}

export default App;

// export whole component to separate component to attatch provider to whole component
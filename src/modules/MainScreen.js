import React, {Component, useEffect,useState} from 'react';
import ListCompHooks from './ListCompHooks';
import { connect } from 'react-redux';
import { setFetchState, setApiData } from '../redux/reducers/listData/actions';

const DATA_URL = 'https://picsum.photos/v2/list';

class MainScreen extends Component{
  constructor(props){
    super(props);
    this.fetchApiData = this.fetchApiData.bind(this);
  }

  fetchApiData(){
    this.props.dispatch(setFetchState(true));
    fetch(DATA_URL)
      .then(response => response.json())
        .then(responseJson => {
          this.props.dispatch(setApiData(responseJson));
          this.props.dispatch(setFetchState(false));
    })
    .catch((error) => console.warn(error));
  }
  componentDidMount(){
    this.fetchApiData();
  }

  render(){
    return(
        <ListCompHooks isLoading={this.props.isFetching} data={this.props.data} fetchDataMethod={this.fetchApiData} />
    );
  }
}

function mapStateToProps(state){
  return{
    data: state.data,
    isFetching: state.isFetching
  };
}

export default connect(mapStateToProps)(MainScreen);
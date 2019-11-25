import React, {Component, useEffect,useState} from 'react';
import ListCompHooks from './ListCompHooks';
import { useSelector, useDispatch } from 'react-redux';
import { setFetchState, setApiData } from '../redux/reducers/listData/actions';
import { bindActionCreators } from 'redux';  

const DATA_URL = 'https://picsum.photos/v2/list';

const MainScreen = (props) => {

  const data = useSelector(state => state.data)
  const isFetching = useSelector(state => state.isFetching)
  const dispatch = useDispatch();

  

  const fetchApiData = () =>{
    dispatch(setFetchState(true));
    fetch(DATA_URL)
      .then(response => response.json())
        .then(responseJson => {
          dispatch(setApiData(responseJson));
          dispatch(setFetchState(false));
    })
    .catch((error) => console.warn(error));
  }



  return(
      <ListCompHooks isLoading={isFetching} data={data} fetchDataMethod={fetchApiData} />
  );
}

// const mapStateToProps = (state) => {
//   return{
//     data: state.data,
//     isFetching: state.isFetching
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return(
//     bindActionCreators({setApiData, setFetchState}, dispatch)
//   );
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
export default MainScreen;
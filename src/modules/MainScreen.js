import React, { useEffect, useCallback} from 'react';
import ListCompHooks from './ListCompHooks';
import { useSelector, useDispatch } from 'react-redux';
import { setFetchState, setApiData } from '../redux/reducers/listData/actions';

const DATA_URL = 'https://picsum.photos/v2/list';

const MainScreen = () => {

  const data = useSelector(state => state.data)
  const isFetching = useSelector(state => state.isFetching)
  const dispatch = useDispatch();

  const setData = useCallback(
    (data) => dispatch(setApiData(data)),
    [dispatch]
  )

  const setFetching = useCallback(
    (isFetching) => dispatch(setFetchState(isFetching)),
    [dispatch]
  )

  const fetchApiData = () =>{
    setFetching(true);
    fetch(DATA_URL)
      .then(response => response.json())
        .then(responseJson => {
          setData(responseJson);
          setFetching(false);
    })
    .catch((error) => console.warn(error));
  }

  useEffect( ()=>{
    fetchApiData()
  }, [])

  return(
      <ListCompHooks isLoading={isFetching} data={data} fetchDataMethod={fetchApiData} />
  );
}

export default MainScreen;
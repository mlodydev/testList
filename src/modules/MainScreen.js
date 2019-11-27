import React, { useEffect} from 'react';
import ListCompHooks from './ListCompHooks';
import { useSelector, useDispatch } from 'react-redux';
import { setFetchState, setApiData } from '../redux/reducers/listData/actions';
import { useNavigation } from 'react-navigation-hooks'
import { getActiveChildNavigationOptions } from 'react-navigation';

const DATA_URL = 'https://picsum.photos/v2/list';

const MainContainer = () => {

  const data = useSelector(state => state.data)
  const isFetching = useSelector(state => state.isFetching)
  const dispatch = useDispatch()

  const setData = (data) => dispatch(setApiData(data))
  const setFetching = (isFetching) => dispatch(setFetchState(isFetching))

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
  const { navigate } = useNavigation()

  return(
    <MainScreen isFetching={isFetching} data={data} fetchApiData={fetchApiData} navigation={navigate}/>
  );
}

const MainScreen = (props) => {

  useEffect( ()=>{
    props.fetchApiData()
  }, [])

  return(
      <ListCompHooks isLoading={props.isFetching} data={props.data} fetchDataMethod={props.fetchApiData} navigation={props.navigation} />
  );
}

MainContainer.navigationOptions = {
  header: null,
}
export default MainContainer;
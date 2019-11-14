import React, {useState, useEffect} from 'react';

import ListComp from './modules/ListComp';
import ListCompHooks from './modules/ListCompHooks';

const DATA_URL = 'https://picsum.photos/v2/list';

const App = () =>{

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchApiData=()=>{
    setIsLoading(true);
    fetch(props.url)
        .then(response => response.json())
            .then(responseJson => {
                setIsLoading(false);
                setData(responseJson);
    })
    .catch((error) => console.warn(error));
  }
  
  useEffect(()=>{
    fetchApiData();
  }, []);

  return(
    // <ListComp url={DATA_URL}/>
    <ListCompHooks url={DATA_URL} isLoading={isLoading} data={data} fetchDataMethod={fetchApiData}/>
  );
}

export default App;
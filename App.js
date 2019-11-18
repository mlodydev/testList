import React, {useState, useEffect} from 'react';

import ListCompHooks from './modules/ListCompHooks';

const DATA_URL = 'https://picsum.photos/v2/list';

const App = () =>{

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchApiData=()=>{
    setIsLoading(true);
    fetch(DATA_URL)
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
    <ListCompHooks isLoading={isLoading} data={data} fetchDataMethod={fetchApiData} />
  );
}

export default App;
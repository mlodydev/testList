import React, {Component} from 'react';

import ListComp from './modules/ListComp';
import ListCompHooks from './modules/ListCompHooks';

const DATA_URL = 'https://picsum.photos/v2/list';

const App = () =>{
  return(
    // <ListComp url={DATA_URL}/>
    <ListCompHooks url={DATA_URL} />
  );
}

export default App;
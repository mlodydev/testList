import { createStore } from 'redux';
import reducer from './reducers/listData/reducer';

export const store = createStore(reducer);
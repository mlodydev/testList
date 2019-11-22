import { combineReducers } from 'redux';
import listData, { resetState as resetStateListData } from './listData/reducer';
import { RESET_REDUCER } from './listData/actions';
const reducers = combineReducers({
    listData
})

const rootReducer = (state, action) => {
    if (action.type === RESET_REDUCER) {
        state ={
            listData: {
                ...resetStateListData(state.listData)
            }
        }
    }

    return reducers(state, action)
}

export default rootReducer
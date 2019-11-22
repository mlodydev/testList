import {FETCH_API_DATA} from './actions';
import {SET_FETCH_STATE} from './actions';

const initialState = () =>({
    data: []
})

const keepDataState = currentState => ({})

const resetState = state => ({
    ...initialState(),
    ...keepDataState(state)
})

export const reducer = (state = initialState(), action) => {
    switch(action.type){
        case FETCH_API_DATA:
            return {...state, data: action.payload}
        case SET_FETCH_STATE:
            return {...state, isFetching: action.payload}
        default:
            return state
    }
}


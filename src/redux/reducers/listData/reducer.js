import {SET_API_DATA, SET_FETCH_STATE} from './actions';

const initialState = () =>({
    data: [],
    isFetching: false
})

export default reducer = (state = initialState(), action) => {
    switch(action.type){
        case SET_API_DATA:
            return {...state, data: action.payload}
        case SET_FETCH_STATE:
            return {...state, isFetching: action.payload}
        default:
            return state
    }
}


export const SET_API_DATA = 'SET_API_DATA';
export const SET_FETCH_STATE = 'SET_FETCH_STATE';

export const setApiData = (payload) => ({type: SET_API_DATA, payload})

export const setFetchState = (payload) => ({type: SET_FETCH_STATE, payload})

export const resetReducer = () => ({
    type: RESET_REDUCER
})
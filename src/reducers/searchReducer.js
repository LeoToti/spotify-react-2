import { initialState } from "../store";

export const searchReducer = (state = initialState.search, action) => {

    switch (action.type) {
        case 'ADD_SEARCH_RESULTS':

            return {
                ...state,
                album: action.payload
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload,
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload,
            }


        default:
            return state
    }
}
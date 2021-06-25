import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { favoritesReducer } from '../reducers/favoritesReducer'
import { searchReducer } from '../reducers/searchReducer'
import { queueReducer } from '../reducers/queueReducer'

import thunk from "redux-thunk";

export const initialState = {
    like: {
        favorites: []
    },
    queue: {
        queueImage: null,
        currentSong: null,
        currentQueue: [],

    },
    search: {
        album: {},
        loading: false,
        error: false
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const combineReducer = combineReducers({
    like: favoritesReducer,
    queue: queueReducer,
    search: searchReducer
})

const configureStore = () => createStore(combineReducer, composeEnhancers(applyMiddleware(thunk)))

export default configureStore
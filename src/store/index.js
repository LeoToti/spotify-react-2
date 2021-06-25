import { createStore, combineReducers, applyMiddleware, compose } from "redux";
/* import { favoritesReducer } from '../Reducer/favoritesReducer'
import { searchReducer } from '../Reducer/searchReducer' */

import thunk from "redux-thunk";

export const initialState = {
    like: {
        favorites: []
    },
    queue: {
        currentSong: null,
        currentQueue: [],

    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const combineReducer = combineReducers({
    like: favoritesReducer,
    queue: queueReducer
})

const configureStore = () => createStore(combineReducer, composeEnhancers(applyMiddleware(thunk)))

export default configureStore
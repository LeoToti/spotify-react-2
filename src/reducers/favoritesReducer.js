import { initialState } from "../store";

export const favoritesReducer = (state = initialState.like, action) => {

    switch (action.type) {
        case 'ADD_FAVORITE':

            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }

        case 'REMOVE_FAVORITE':
            let Favorites = state.favorites.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                favorites: [...Favorites]
            }

        default:
            return state
    }
}
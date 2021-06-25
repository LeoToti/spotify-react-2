import { initialState } from "../store";

export const queueReducer = (state = initialState.queue, action) => {

    switch (action.type) {
        case 'ADD_TO_QUEUE':

            return {
                ...state,
                currentQueue: [...action.payload]
            }
        case 'SET_CURRENT_SONG':

            return {
                ...state,
                currentSong: action.payload
            }

        default:
            return state
    }
}
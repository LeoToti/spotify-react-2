import { initialState } from "../store";

export const queueReducer = (state = initialState.queue, action) => {

    switch (action.type) {
        case 'SET_QUEUE_IMAGE':

            return {
                ...state,
                queueImage: action.payload
            }
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
        case 'NEXT_SONG':
            let indexNext = action.payload === (state.currentQueue.length - 1) ? -1 : action.payload
            return {
                ...state,
                currentSong: indexNext + 1
            }
        case 'PREV_SONG':
            let indexPrev = action.payload === 0 ? state.currentQueue.length : action.payload
            return {
                ...state,
                currentSong: indexPrev - 1
            }

        default:
            return state
    }
}

export const add_Queue = (data) => ({
    type: 'ADD_TO_QUEUE',
    payload: data
})

export const current_Song = (data) => ({
    type: 'SET_CURRENT_SONG',
    payload: data
})

export const add_Queue_Image = (data) => ({
    type: 'SET_QUEUE_IMAGE',
    payload: data
})

export const next_Song = (data) => ({
    type: 'NEXT_SONG',
    payload: data
})
export const prev_Song = (data) => ({
    type: 'PREV_SONG',
    payload: data
})

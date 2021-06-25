

export const fetch_Album = (data) => {
    return async (dispatch) => {

        let headers = new Headers({
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20"
        });

        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true,
            })
            let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + data, {
                method: "GET",
                headers
            });

            if (response.ok) {
                let album = await response.json();
                dispatch({
                    type: 'ADD_SEARCH_RESULTS',
                    payload: album,
                })
                dispatch({
                    type: 'SET_LOADING',
                    payload: false,
                })
            } else {
                console.log('Error has Occured!!')
                dispatch({
                    type: 'SET_LOADING',
                    payload: false,
                })
                dispatch({
                    type: 'SET_ERROR',
                    payload: true,
                })
            }
        } catch (exception) {
            console.log(exception);
            dispatch({
                type: 'SET_LOADING',
                payload: false,
            })
            dispatch({
                type: 'SET_ERROR',
                payload: true,
            })
        }
    }
}
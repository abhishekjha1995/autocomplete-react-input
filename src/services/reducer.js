const initialState = {
    characters: undefined,
    error: undefined
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "GET_CHARACTERS_SUCCESS":
            return {
                ...state,
                characters: payload?.results,
                error: null
            }
        case "GET_CHARACTERS_FAIL":
            return {
                ...state,
                characters: null,
                error: payload
            }
        case "CLEAR_CHARACTERS":
            return {
                ...state,
                characters: null,
                error: null
            }
        default:
            return state;
    }
}
import actions from './actions'
import sentence from "../../constante/Constante";

const initialState = {
    episodes : [],
    characters : [],
    loading : false,
    currentEpisode : null
}

export default function filmsReducers(state = initialState, action) {
    switch (action.type) {
        case actions.SET_STATE:
            return { ...state, ...action.payload }
        default:
            return state
    }
}

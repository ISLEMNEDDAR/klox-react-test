import { combineReducers} from "redux"
import episodes from "./episode/reducers";

export default ()=> combineReducers({
    episodes
})
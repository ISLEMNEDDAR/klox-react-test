import actions from "./actions";
import {all, takeEvery,put,call,select,takeLatest} from "redux-saga/effects"
import {dispatchAction, failure, requestLoading, succes} from "../../services/utils/function.service";
import sentence from "../../constante/Constante";
import {act} from "@testing-library/react";
import * as episodeService from "../../services/episode.service"

export function* GET_EPISODES() {
    console.log("getepisodes in saga")
    yield put(requestLoading(actions.SET_STATE,true))
    let episode = []
    let next = 1
    while (next){
        const response = yield call(episodeService.getEpisodes,next)
        if(!response) yield put(failure({error : sentence.error}))
        next = response.data.episodes.info.next
        episode = episode.concat(response.data.episodes.results)
    }
    console.log(episode)
    yield put(succes({episodes: episode},actions.SET_STATE))
    yield put(requestLoading(actions.SET_STATE,false))
}

export function* GET_CHARACTERS({payload}){
    const {currentEpisode} = payload
    let characters = []
    let next = 1
    yield put(requestLoading(actions.SET_STATE,true))
    while(next){
        const response = yield call(episodeService.getCharacters,next,currentEpisode.episode)
        if(!response) {
            throw "Error"
            yield put(failure({error : sentence.error}))
        }
        next = response.data.episodes.info.next
        characters = characters.concat(response.data.episodes.results[0].characters)
    }
    console.log(characters)
    yield put(succes({characters: characters},actions.SET_STATE))
    yield put(requestLoading(actions.SET_STATE,false))
}

export function* SET_CURRENT_EPISODE({payload}){
    let {episodes} = yield select(state => state.episodes);
    const {value} = payload
    const curentEpisode = (episodes.filter(episode => episode.id === value))[0]
    //console.log({id : value, name: `${curentEpisode.episode}-${curentEpisode.name}`})
    yield put(succes({currentEpisode: curentEpisode},actions.SET_STATE))
}

export default function* rootSaga() {
   yield all([
       takeEvery(actions.GET_EPISODES, GET_EPISODES),
       takeEvery(actions.GET_CHARACTERS, GET_CHARACTERS),
       takeEvery(actions.SET_CURRENT_EPISODE,SET_CURRENT_EPISODE)
   ])
}
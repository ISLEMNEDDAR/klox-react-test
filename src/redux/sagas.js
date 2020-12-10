import {all} from 'redux-saga/effects'
import episode from "./episode/sagas";

export default function* rootSaga(){
    yield all([
        episode()
    ])
}
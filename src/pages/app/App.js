import React, {Fragment, useEffect} from "react";
import "./css/App.css"
import Header from "../../component/commun/Header";
import Content from "../../component/commun/Content";
import MultiSelect from "../../component/commun/MultiSelect";
import {useDispatch, useSelector} from "react-redux";
import {dispatchAction} from "../../services/utils/function.service";
import episodeAction from "../../redux/episode/actions";
import {Space, Spin} from "antd";
import ListCharacter from "../../component/characters/ListCharacter";

function App(){
    const {loading,episodes} = useSelector(state => state.episodes)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(dispatchAction(episodeAction.GET_EPISODES))
    },[])

    return(
        <div>
            <Header/>
            <MultiSelect/>
            <ListCharacter/>
        </div>
    )
}

export default App
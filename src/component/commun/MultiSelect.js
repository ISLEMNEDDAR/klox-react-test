import React ,{useEffect} from "react";
import "./css/MultiSelect.css"
import {Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import sentence from "../../constante/Constante";
import {dispatchAction} from "../../services/utils/function.service";
import actions from "../../redux/episode/actions";
const {Option} = Select
function MultiSelect(){
    const {episodes,currentEpisode} = useSelector(state => state.episodes)
    const dispatch = useDispatch()

    useEffect(()=>{
        console.log(currentEpisode)
        if(currentEpisode !== null){
            dispatch(dispatchAction(actions.GET_CHARACTERS,{currentEpisode}))
        }
    },[currentEpisode])

    function handleChange(value) {
        console.log(`selected ${value}`);
        dispatch(dispatchAction(actions.SET_CURRENT_EPISODE,{value}))
    }

    return(
        <div className={"container-multiselect bgwhite brd_box fullh flex_column centerFlex"}>
            <Select
                placeholder={sentence.multiselect.default}
                style={{ width: "95%",borderRadius : 20 }}
                onChange={handleChange}
                bordered={false}
                allowClear
                value={currentEpisode === null ? sentence.multiselect.default : `${currentEpisode.episode}-${currentEpisode.name}`}
            >
                {episodes.map((episode,index) => (
                    <Option key={index} value={episode.id} >{episode.episode + "-"+episode.name}</Option>
                ))}
            </Select>
        </div>
    )
}

export default MultiSelect
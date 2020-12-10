import React, {Fragment} from "react";
import {useEffect} from "react"
import {useSelector} from "react-redux";
import CharacterItem from "./CharacterItem";

const ListCharacter = ()=>{
    const {characters} = useSelector(state => state.episodes)
    useEffect(()=>{
        console.log(characters)
    },[characters])
    return(
        <Fragment>
            {characters.map((character,index)=>(<CharacterItem key={index} character={character}/>))}
        </Fragment>
    )
}

export default ListCharacter
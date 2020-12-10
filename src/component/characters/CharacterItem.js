const CharacterItem = ({character})=>{
    return(
        <div style={{
            display : "flex"
        }}>
            <img src={character.image} style={{width : 100,height : 100}} alt={"image actor"}/>
            <div style={{
                display : "flex",
                flexDirection : "column"
            }}>
                <p>{`Name : ${character.name}`}</p>
                <p>{`Species : ${character.species}`}</p>
            </div>
        </div>
    )
}

export default CharacterItem
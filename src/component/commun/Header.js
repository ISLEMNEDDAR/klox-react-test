import React from "react";
import "./css/Header.css"
import sentence from "../../constante/Constante"
function Header(){
    return (
        <div className={"header_container"}>
            <div className={"header_title_container"}>
                <p className={"header_title"}>{sentence.header.title}</p>
            </div>
        </div>
    )
}

export default Header
import React from "react";
import "./css/Content.css"
function Content({children}){
    return(
        <div className={"bgred botTopMar centerFlex flex_column"}>
            {children}
        </div>
    )
}

export default Content
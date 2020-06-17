import React from "react";
import "./FlexBox.css";

function FlexBox(props){
    return (
        <div className="flexbox">
            {props.children}
        </div>
    )
}

export default FlexBox;
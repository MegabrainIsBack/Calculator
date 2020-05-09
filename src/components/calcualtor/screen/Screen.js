import React from "react";
import "./Screen.css";

function Screen(props){
    return <div className="screen">
        <div>{props.pressed}</div>
        <div>{props.result}</div>
    </div>
}

export default Screen;
import React from 'react';
import "./Keys.css";

function Keys(props){
    let styl="";
    if (props.ky.length===1){
        if(props.ky==="0" || props.ky==="="){
            styl="l l2";
        }else {
            styl="l l1";
        }
    }else {
        styl="l l3";
    }

    return (
        <div>
        <button className={styl} onClick={() => props.handleOnClick(props.ky)}>
            {props.ky}
        </button>
        </div>
    )
}

export default Keys;
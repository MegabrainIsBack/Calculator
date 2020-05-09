import React from "react"
import Keys from './keys/Keys';
import "./Keyboard.css";


function Keyboard(props){
    const keys=["clear", "/", "7","8","9","*","4","5","6","+","1","2","3","-","0","="];
    
    return (
        <div className="keyboard">
                {keys.map((ky, index)=>(
                    <Keys 
                        key={index}
                        ky={ky}
                        handleOnClick={props.handleOnClick}
                    />
                ))}
        </div>
    )
}

export default Keyboard;
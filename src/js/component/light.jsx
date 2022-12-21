import React, {useState} from "react";


const Light = (props) => {

    

    return(
        <div 
        className={`light ${props.class} + ${(props.var === props.color)    ? ' glow':''}`} 
        onClick={() => {
            (props.var === props.color) ? props.setVar('') : props.setVar(props.color);
        }}>
        </div>
    )
}

export default Light

/*
<div 
    className={`light r-light + ${(selectedColor === 'red')    ? ' glow':''}`} 
    onClick={() => {
        (selectedColor === 'red') ? setSelected("") : setSelected('red');
    }}>
    </div>


*/
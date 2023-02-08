import React from "react";

function Input(props){
    return(
        <input 
        type={props.type}
        value={props.cep}
        onChange={(e) => props.setCep(e.target.value)}
        placeholder={props.placeholder}
        />
    )
}

export default Input;
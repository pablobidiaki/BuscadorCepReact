import React from "react";

function Input(props){
    return(
        <input 
        type={props.type}
        value={props.cep}
        onChange={(e) => props.setCep(e.target.value)}
        onInput={(e) => e.target.value = e.target.value.slice(0, 8)}
        placeholder={props.placeholder}
        />
    )
}

export default Input;
import React from "react";

function Botao(props){

    const botao = document.getElementById("botao")
    let cep = props.cep
    if(cep.length <= 7){
       botao.style.display = 'none'
    }else if(cep.length == 8){
        botao.style.display = 'flex'
    }

    return(
        <>
            <button id='botao'> {props.text}</button>
        </>
    )
}

export default Botao;
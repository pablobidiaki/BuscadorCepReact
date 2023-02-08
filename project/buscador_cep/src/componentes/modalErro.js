import React from "react";

function ModalError(){
    return(
        <div id="modal"className="none">
            <h1>VALOR INVALIDO !</h1>
            <p>Digite apenas CEP's com 8 dígitos !</p>
            <p>Clique em qualquer lugar para voltar</p>
        </div>
    )
}

export default ModalError;
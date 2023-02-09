import React, {useEffect, useState} from "react";

function Infos(props){

    const grid = document.getElementById("grid")
    const botao = document.getElementById("botao")
    let cep = props.cep

    function adiconarDados(dados){
        botao.addEventListener('click', () => {
            grid.appendChild(dados)
        })
    }

    useEffect(() =>{
 
        if(cep.length === 8){
            let url = `https://viacep.com.br/ws/${cep}/json/`
            fetch(url)
            .then((res) => res.json())
            .then((data) => {

                let div = document.createElement('div')
                let cep = document.createElement('p')
                let rua = document.createElement('p')
                let bairro = document.createElement('p')
                let cidade = document.createElement('p')
                let estado = document.createElement('p')
                let ddd = document.createElement('p')
                let erro = document.createElement('p')

                if(data.erro === true){
                    erro.innerText = "Nenhum CEP encontrado"
                    div.appendChild(erro)
                    adiconarDados(div)
                }else{


                cep.innerText = "CEP : " + data.cep
                rua.innerText = "Rua : " + data.logradouro
                bairro.innerText = "Bairro : " + data.bairro
                cidade.innerText = "Cidade : " + data.localidade
                estado.innerText = "Estado : " + data.uf
                ddd.innerText = "DDD : " + data.ddd

                div.appendChild(cep)
                div.appendChild(rua)
                div.appendChild(bairro)
                div.appendChild(cidade)
                div.appendChild(estado)
                div.appendChild(ddd)

                adiconarDados(div)
                }
            })
        }else{

        }
    })
}

export default Infos;
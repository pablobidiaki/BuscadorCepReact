import React, {useEffect} from "react";

function Infos(props){

    const modal = document.getElementById("modal")
    const container = document.getElementById("container")
    const html = document.getElementById("html")

    function tirarModal(){
        html.addEventListener('click', () => {
            modal.style.display = 'none'
            container.style.display = 'block'
            html.style.cursor = 'default'
        })
    }

    useEffect(() =>{
        let cep = props.cep
        if(cep.length === 8){
            let url = `https://viacep.com.br/ws/${cep}/json/`
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
                
            })
        }else if(cep.length > 8){
            modal.style.display = 'flex'
            container.style.display = 'none'
            html.style.cursor = 'pointer'
            tirarModal()
        }
    })

    return(
        <>
            
        </>
    )
}

export default Infos;
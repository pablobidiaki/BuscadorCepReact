import React, {useState} from 'react';
import Input from './componentes/input';
import Infos from './componentes/infos';
import Botao from './componentes/botao';

import './App.css';

function App() {

  const [cep, setCep] = useState(0)

  return (
    <div className="App" >
      <div id='container'>
        <h1>Busque informações de algum CEP !</h1>
        <Input type='number' value={cep} setCep={setCep} placeholder='Digite um CEP . . .'/>
        <Botao text='Buscar' cep={cep}/>
        <section id='grid'>
          <Infos cep={cep} setCep={setCep}/>
        </section>
      </div>
    </div>
  );
}

export default App;

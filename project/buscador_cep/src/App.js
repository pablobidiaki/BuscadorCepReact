import React, {useState} from 'react';
import Input from './componentes/input';
import Infos from './componentes/infos';
import ModalError from './componentes/modalErro';
import './App.css';

function App() {

  const [cep, setCep] = useState(0)

  return (
    <div className="App" >
      <div id='container'>
        <h1>Busque informações de algum CEP !</h1>
        <Input type='number' value={cep} setCep={setCep} placeholder='Digite um CEP . . .'/>
        <div>
          <Infos cep={cep} setCep={setCep}/>
        </div>
      </div>
      <ModalError />
    </div>
  );
}

export default App;

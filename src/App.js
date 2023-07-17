import { useState } from 'react'

import Nome from "./components/Nome";


function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React JS'
  ]);

  function handleRegister(e){
    e.preventDefault();

    setTarefas([...tarefas, input])
    setInput('');
   }

  return (
    <div>
      <h1>Cadastrando usuario</h1>

      <form onSubmit={handleRegister}>
        <label>Nome da Tarefa </label><br/>
        <input 
        placeholder="Digite uma tarefa:" 
        value={input} 
        onChange={ (e) => setInput (e.target.value) }
        /><br/>
      <button type="submit">Register</button>
    </form>

    <br/> <br/>

    <ul>
    {tarefas.map( tarefa => (
     <li key={tarefa}>{tarefa} </li>
      ))}
    </ul>
  
    </div>
  );
}

export default App;


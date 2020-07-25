import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  const [name, setname] = useState();

  function namechanged(event) {
    console.log(event.target.value);
  }
    return (
      <div className="App">
        <form>
          <label htmlFor="newTodo">New Todo</label>
          <input onChange={(event) => {namechanged(event); setname(event.target.value);}} id="newTodo" name="newTodo"></input>
          <button type="submit" value="Valider" name="Valider">Valider</button>
        </form>
        <h1>Hello {name}</h1>
      </div>
    );
  }

export default App;

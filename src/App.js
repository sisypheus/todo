import React, {useState, useCallback, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const onNewTodoChange = useCallback((event) => {
    setNewTodo(event.target.value);
  }, []);

  const formsubmitted = useCallback((event) => {
    event.preventDefault();
    console.log('form submitted');
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        content: newTodo,
        done: false
      }
    ]);
    setNewTodo("");
  }, [newTodo, todos]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);
    return (
      <div className="App">
        <form onSubmit={formsubmitted}>
          <label htmlFor="newTodo">New Todo</label>
          <input onChange={onNewTodoChange} id="newTodo" name="newTodo" value={newTodo}></input>
          <button type="submit" value="Valider" name="Valider">Valider</button>
        </form>
          {todos.map((todo) => (
            <p key={todo.id}>{todo.content}</p>
          ))
          }
      </div>
    );
  }

export default App;

import { useState, useEffect } from 'react';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://todo-app-fy5q.onrender.com/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json); 
      })
      .catch((err) => {
        console.error("Failed to fetch todos:", err);
      });
  }, []);

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;

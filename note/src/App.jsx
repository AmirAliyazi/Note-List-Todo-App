import { useState } from 'react'
import './App.css'
import { CheckIcon, TrashIcon } from '@heroicons/react/24/outline'


function App() {


  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (todo) => {

    const newTodo = {
      id: Date.now(),
      text: todo,
      isCompleted: false,
    }

    setList([...list, newTodo]);
    setInput('');
  }

  const deleteTodo = (id) => {

    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  }

  const completeTodo = (id) => {
  
    const newList = list.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setList(newList);
  }

  return (
    <div className="app">
      <h1>My Todo List</h1>
      <div className="todo-info">
        <input type="text" placeholder="Add Todo" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => addTodo(input)}>Add</button>
      </div>
      <div className="todo-list">
        <ul>
          {list.map((todo) => (
            <li className={`todo ${todo.isCompleted ? 'completed' : ''}`} key={todo.id}>
              <p>{todo.text}</p>
              <div className="btn">
                <button onClick={() => deleteTodo(todo.id)} className="trash">
                  <TrashIcon className='trash-icon' />
                </button>
                <button className="check" onClick={() => completeTodo(todo.id)}>
                  <CheckIcon className='check-icon' />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App

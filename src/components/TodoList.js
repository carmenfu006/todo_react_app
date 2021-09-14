import React, {useState} from 'react';
import InputForm from './InputForm';
import Todo from './Todo';

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  }

  const updateTodo = (TodoID, updatedTodo) => {
    setTodos(prev => prev.map(
      list => (list.id === TodoID ? updatedTodo : list)
    ));
  }

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo
    })

    setTodos(updatedTodos);
  }

  const removeTodo = id => {
    const filteredTodos = todos.filter(todo => todo.id !== id);

    setTodos(filteredTodos)
  }

  return (
    <div>
      <h1>My Todo List</h1>
      <InputForm onSubmit={addTodo} />
      <Todo todos={todos} updateTodo={updateTodo} completeTodo={completeTodo} removeTodo={removeTodo} />
    </div>
  )
}
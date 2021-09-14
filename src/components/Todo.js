import React, {useState} from 'react';
import InputForm from './InputForm';

export default function Todo(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    props.updateTodo(edit.id, value)

    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <InputForm edit={edit} onSubmit={submitUpdate} />
  }

  return props.todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-complete' : 'todo-incomplete'}>
      <div key={todo.id} id={todo.id}> {todo.value} </div>
      <div className='action-button'>
        <button onClick={() => props.completeTodo(todo.id)}> {todo.isComplete ? 'Incomplete' : 'Complete'} </button>
        <button onClick={() => setEdit({id: todo.id, value: todo.value})}>Edit</button>
        <button onClick={() => props.removeTodo(todo.id)}>Remove</button>
      </div>
    </div>
  ));
}
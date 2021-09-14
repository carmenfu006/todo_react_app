import React, {useState} from 'react';

export default function InputForm(props) {

  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Date.now(),
      value: input,
      isComplete: false
    })

    setInput('');
  }

	return(
		<form className='input-form' onSubmit={handleSubmit}>
      <input type='text' placeholder='Add a todo' value={input} name='todo' onChange={handleChange} />
      <button>{props.edit ? 'Update' : 'Add' }</button>
    </form>
	)
}
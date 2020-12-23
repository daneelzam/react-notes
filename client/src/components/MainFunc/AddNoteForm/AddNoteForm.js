/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNoteAC } from '../../../redux/actionCreators/mainAC';

function AddNotebookForm() {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [inputs, setInputs] = useState({ title: '', body: '' });
  const { title, body } = inputs;
  const activeNotebook = useSelector((state) => state.main.activeNotebook);
  const handleChange = ({ target: { name, value } }) => {
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/notes/note', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, body, notebookID: activeNotebook._id })
    }).then((res) => res.json())
      .then((serverData) => {
        if (serverData) {
          return dispatch(addNoteAC(serverData));
        }
        return setError('Something went wrong try again');
      })
      .catch(() => setError('Something went wrong try again'));
  };
  return (
        <form onSubmit={handleSubmit}>
        <fieldset>
            <legend>Create new note</legend>
            <label>
                Title:
                <input name='title' type='text' required onChange={handleChange} value={ title }/>
            </label>
            <label>
                Body:
                <input name='body' type='text' required onChange={handleChange} value={ body }/>
            </label>
            <button type="submit">Create</button>
            <div className='error'>
                {error}
            </div>
        </fieldset>
        </form>
  );
}
export default AddNotebookForm;

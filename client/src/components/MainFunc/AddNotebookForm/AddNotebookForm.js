/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNotebookAC } from '../../../redux/actionCreators/mainAC';

function AddNotebookForm() {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [inputs, setInputs] = useState({ title: '' });
  const { title } = inputs;
  const email = useSelector((state) => state.auth.user.email);
  const handleChange = ({ target: { name, value } }) => {
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/notes/notebook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, email })
    }).then((res) => res.json())
      .then((serverData) => {
        if (serverData) {
          dispatch(addNotebookAC(serverData));
        }
        return setError('Something went wrong try again');
      })
      .catch(() => setError('Something went wrong try again'));
  };
  return (
        <form onSubmit={handleSubmit}>
        <fieldset>
            <legend>Create new notebook</legend>
            <label>
                Title:
                <input name='title' type='text' required onChange={handleChange} value={ title }/>
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

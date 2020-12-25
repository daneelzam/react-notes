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
    })
      .then((res) => res.json())
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
      <div className="form-group">
        <label for="title"><h4 className='text-light'>Create your notebook: </h4></label>
        <input
          className="form-control"
          name="title"
          type="text"
          required
          onChange={handleChange}
          value={title}
        />
        <small id="emailHelp" class="form-text text-muted">In a notebook, you can create notes</small>
        <div className="error">{error}</div>
      </div>
      <button className="btn btn-outline-light" type="submit">
        Create
      </button>
    </form>
  );
}
export default AddNotebookForm;

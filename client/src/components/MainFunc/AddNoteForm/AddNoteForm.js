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
    })
      .then((res) => res.json())
      .then((serverData) => {
        if (serverData) {
          return dispatch(addNoteAC(serverData));
        }
        return setError('Something went wrong try again');
      })
      .catch(() => setError('Something went wrong try again'));
  };
  return (
    <form
      className="p-3 form-group d-flex flex-column align-items-center"
      style={{ backgroundColor: '#F6CA29' }}
      onSubmit={handleSubmit}
    >

        <button
          className="btn btn-outline-dark"
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          New notes
        </button>
      <div className="collapse" id="collapseExample">
      <fieldset className="p-3 form-group d-flex flex-column align-items-start">
        <legend>Create new note</legend>
        <label>
          <h5>Title:</h5>
          <input
            className="form-control"
            name="title"
            type="text"
            required
            onChange={handleChange}
            value={title}
          />
        </label>
        <label>
          <h5>Body:</h5>
          <textarea
            className="form-control"
            name="body"
            rows="5"
            cols="100"
            required
            onChange={handleChange}
            value={body}
          />
        </label>
        <button type="submit" className="btn btn-outline-dark">Create</button>
        <div className="error">{error}</div>
      </fieldset>
      </div>
    </form>
  );
}
export default AddNotebookForm;

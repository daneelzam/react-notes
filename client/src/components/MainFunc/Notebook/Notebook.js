/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNotebookAC, selsectActiveNotebookAC } from '../../../redux/actionCreators/mainAC';

function Notebook({ notebook }) {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(selsectActiveNotebookAC(notebook));
  };
  const deleteHandler = () => {
    const notebookId = notebook._id;
    fetch(`/api/notes/notebook/${notebookId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/json'
      }
    }).then((res) => {
      if (res.status === 200) {
        dispatch(deleteNotebookAC(notebook));
      }
    });
  };
  return (
        <li>
        <button type='button' onClick={clickHandler}>{notebook.title}</button>
        <button type='button' onClick={deleteHandler}>&#10006;</button>
        </li>
  );
}

export default Notebook;

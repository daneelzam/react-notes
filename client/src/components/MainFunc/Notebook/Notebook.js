/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNotebookAC, selsectActiveNotebookAC } from '../../../redux/actionCreators/mainAC';

function Notebook({ notebook }) {
  const dispatch = useDispatch();
  const clickHandler = ({ target }) => {
    target.parentNode.parentNode.childNodes.forEach((li) => {
      li.childNodes[0].classList.remove('active');
    });
    target.classList.add('active');
    dispatch(selsectActiveNotebookAC(notebook));
  };
  const deleteHandler = () => {
    const notebookId = notebook._id;
    fetch(`${process.env.REACT_APP_URL}/api/notes/notebook/${notebookId}`, {
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
        <li className='list-group-item d-flex justify-content-between mt-1 mb-1' style={{ backgroundColor: '#3F3F41' }}>
        <button type='button' className='btn btn-outline-light' onClick={clickHandler}>{notebook.title}</button>
        <button type='button' className='btn btn-outline-danger' style={{ textAlign: 'center' }} onClick={deleteHandler}>delete</button>
        </li>
  );
}

export default Notebook;

import React from 'react';
import { useDispatch } from 'react-redux';
import { selsectActiveNotebookAC } from '../../../redux/actionCreators/mainAC';

function Notebook({ notebook }) {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(selsectActiveNotebookAC(notebook));
  };
  return (
        <li><button type='button' onClick={clickHandler}>{notebook.title}</button></li>
  );
}

export default Notebook;

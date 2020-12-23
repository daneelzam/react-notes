/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initNotebookAC } from '../../../redux/actionCreators/mainAC';
import Notebook from '../Notebook/Notebook';

function NotebookList() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.user.email);
  const notebooks = useSelector((state) => state.main.notebooks);
  useEffect(() => {
    fetch(`/api/notes/notebook/${email}`)
      .then((res) => res.json())
      .then((notebookList) => dispatch(initNotebookAC(notebookList)));
  }, []);
  return (
        <ul>
            {notebooks
            && notebooks.map((notebook) => <Notebook key={notebook._id} notebook={notebook}/>)}
        </ul>
  );
}

export default NotebookList;

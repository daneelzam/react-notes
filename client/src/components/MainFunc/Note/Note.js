/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNoteAc } from '../../../redux/actionCreators/mainAC';

function Note({ note }) {
  const dispatch = useDispatch();
  const activeNotebook = useSelector((state) => state.main.activeNotebook);
  const deleteHandler = () => {
    const noteId = note._id;
    fetch(`/api/notes/note?noteId=${noteId}&notebookId=${activeNotebook._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/json'
      }
    }).then((res) => {
      if (res.status === 200) {
        dispatch(deleteNoteAc(noteId));
      }
    });
  };
  return (
        <li>
            <span>{note && note.title}:</span> {note && note.body} <button type='button' onClick={deleteHandler}>&#10006;</button>
        </li>
  );
}

export default Note;

/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import AddNoteForm from '../AddNoteForm/AddNoteForm';
import Note from '../Note/Note';

function NoteList() {
  const activeNotebook = useSelector((state) => state.main.activeNotebook);
  return (
        <div>
        <AddNoteForm />
        <ul>
            {activeNotebook
            && activeNotebook.notes.map((note) => <Note key={note._id} note={note}/>)}
        </ul>
        </div>
  );
}

export default NoteList;

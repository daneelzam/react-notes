import React from 'react';
import { useSelector } from 'react-redux';
import AddNotebookForm from '../../MainFunc/AddNotebookForm/AddNotebookForm';
import NotebookList from '../../MainFunc/NotebookList/NotebookList';
import NoteList from '../../MainFunc/NoteList/NoteList';

function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  const activeNotebook = useSelector((state) => state.main.activeNotebook);
  return (
        <div>
          Hello {user.username}
          <AddNotebookForm />
          <NotebookList />
          <NoteList notebook={activeNotebook}/>
        </div>
  );
}
export default Dashboard;

import React from 'react';
import { useSelector } from 'react-redux';
import AddNotebookForm from '../../MainFunc/AddNotebookForm/AddNotebookForm';
import NotebookList from '../../MainFunc/NotebookList/NotebookList';
import NoteList from '../../MainFunc/NoteList/NoteList';

function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  const activeNotebook = useSelector((state) => state.main.activeNotebook);
  return (
    <div className="align-self-xl-stretch" style={{ height: '80%' }}>
      <h1 className='mt-3 mb-3' style={{ textAlign: 'center' }}>Hello {user.username}</h1>
      <div
      className="align-items-stretch align-self-xl-stretch d-flex justify-content-center  align-items-center align-content-center"
      style={{ padding: '0 10rem 0 10rem', height: '100%' }}
      >
        <div style={{ width: '30%' }} className='bg-light'>
          <AddNotebookForm />
          <NotebookList />
        </div>
        <div className='bg-light' style={{ width: '70%' }}>
        <NoteList notebook={activeNotebook} />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;

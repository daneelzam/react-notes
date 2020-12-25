import {
  ADD_NOTE, ADD_NOTEBOOK, DELETE_NOTE, DELETE_NOTEBOOK, INIT_NOTEBOOK, SELECT_ACTIVE_NOTEBOOK
} from '../types';

export const addNotebookAC = (notebook) => ({ type: ADD_NOTEBOOK, payload: notebook });
export const addNoteAC = (note) => ({ type: ADD_NOTE, payload: note });
export const initNotebookAC = (notebookList) => ({ type: INIT_NOTEBOOK, payload: notebookList });
export const selsectActiveNotebookAC = (notebook) => ({
  type: SELECT_ACTIVE_NOTEBOOK,
  payload: notebook
});
export const deleteNotebookAC = (notebook) => ({
  type: DELETE_NOTEBOOK,
  payload: notebook
});
export const deleteNoteAc = (noteId) => ({
  type: DELETE_NOTE,
  payload: noteId
});

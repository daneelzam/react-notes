import {
  ADD_NOTE, ADD_NOTEBOOK, INIT_NOTEBOOK, SELECT_ACTIVE_NOTEBOOK
} from '../types';

export const addNotebookAC = (notebook) => ({ type: ADD_NOTEBOOK, payload: notebook });
export const addNoteAC = (note) => ({ type: ADD_NOTE, payload: note });
export const initNotebookAC = (notebookList) => ({ type: INIT_NOTEBOOK, payload: notebookList });
export const selsectActiveNotebookAC = (notebook) => ({
  type: SELECT_ACTIVE_NOTEBOOK,
  payload: notebook
});

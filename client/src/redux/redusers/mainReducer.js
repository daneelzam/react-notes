/* eslint-disable no-underscore-dangle */
import {
  ADD_NOTEBOOK, ADD_NOTE, INIT_NOTEBOOK, SELECT_ACTIVE_NOTEBOOK
} from '../types';

// window.localStorage.removeItem('state');
const windowState = JSON.parse(window.localStorage.getItem('state'));

let preloadedState = {};

if (windowState && windowState.main) {
  preloadedState = {
    notebooks: windowState.main.notebooks,
    activeNotebook: windowState.main.activeNotebook
  };
} else {
  preloadedState = { notebooks: [], activeNotebook: {} };
}

const mainReducer = (state = preloadedState, action) => {
  switch (action.type) {
    case INIT_NOTEBOOK:
      if (state && state.activeNotebook.title) {
        return {
          ...state,
          notebooks: [...action.payload],
          activeNotebook: state.activeNotebook
        };
      }
      return {
        ...state,
        notebooks: [...action.payload],
        activeNotebook: action.payload[0]
      };

    case ADD_NOTEBOOK:
      return { ...state, notebooks: [...state.notebooks, action.payload] };
    case SELECT_ACTIVE_NOTEBOOK:
      return { ...state, activeNotebook: action.payload };
    case ADD_NOTE:
      return {
        ...state,
        notebooks: state.notebooks.map((notebook) => {
          if (notebook._id === state.activeNotebook._id) {
            return action.payload;
          }
          return notebook;
        }),
        activeNotebook: action.payload
      };
    default:
      return state;
  }
};

export default mainReducer;

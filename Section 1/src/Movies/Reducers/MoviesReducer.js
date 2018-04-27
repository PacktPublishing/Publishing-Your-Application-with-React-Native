/* @flow */

import { handleActions } from 'redux-actions';

const initialState = {
  movies: []
};

function movies(state = initialState, action) {
  switch (action.type) {
    case 'GET_MOVIES':
      return {
        movies: action.payload.movies
      };
    default:
      return state;
  }
}

const reduxActionsMoviesReducer = handleActions(
  {
    GET_MOVIES: (state, action) => ({
      movies: action.payload.movies
    })
  },
  initialState
);

export { movies, reduxActionsMoviesReducer };

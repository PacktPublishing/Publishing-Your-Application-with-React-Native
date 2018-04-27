/* @flow */

const getMovies: Function = (): Object => ({
  type: 'GET_MOVIES',
  payload: {}
});

const getMoviesSuccess: Function = (response: Object): Object => ({
  type: 'GET_MOVIES_SUCCESS',
  payload: {
    movies: response
  }
});

const getMoviesError: Function = (error: Error): Object => ({
  type: 'GET_MOVIES_ERROR',
  payload: {
    errorMessage: error.message
  },
  error: true
});

const getMoviesDismiss: Function = (): Object => ({
  type: 'GET_MOVIES_DISMISS',
  payload: {}
});

export { getMovies, getMoviesSuccess, getMoviesError, getMoviesDismiss };

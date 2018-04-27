/* @flow */

const initialState = {
  movies: [],
  isFetching: false,
  error: false,
  errorMessage: undefined
};

function movies(state = initialState, action) {
  switch (action.type) {
    case 'GET_MOVIES':
      return {
        ...state,
        isFetching: true
      };
    case 'GET_MOVIES_SUCCESS':
      return {
        isFetching: false,
        movies: action.payload.movies,
        error: false,
        errorMessage: undefined
      };
    case 'GET_MOVIES_ERROR':
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMessage: action.payload.errorMessage
      };
    case 'GET_MOVIES_DISMISS':
      return {
        ...state,
        isFetching: false,
        error: false,
        errorMessage: undefined
      };
    default:
      return state;
  }
}

export { movies };

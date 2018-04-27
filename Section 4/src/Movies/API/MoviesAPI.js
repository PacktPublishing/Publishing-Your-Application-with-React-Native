/* @flow */

import api from '../../API';

function getMoviesAPI() {
  return api.get('/movies/');
}

// Assignment, getMoviesDetailAPI

export { getMoviesAPI };

/* @flow */

import { createAction } from 'redux-actions';

const movies = [
  {
    image: 'http://www.jellypedia.com/pictures/m020565_small.jpg',
    title: 'Blade Runner 2049',
    year: 2017
  },
  {
    image: 'http://www.dvdizzy.com/images/d/dunkirk-film-poster.jpg',
    title: 'Dunkirk',
    year: 2017
  },
  {
    image:
      'https://images.fandango.com/r1.0.40/ImageRenderer/131/200/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/189929/last-jedi-poster-full.jpg',
    title: 'Star Wars: The Last Jedi',
    year: 2017
  }
];

const getMovies: Function = (): Object => ({
  type: 'GET_MOVIES',
  payload: {
    movies: movies
  }
});

const reduxActionExample = createAction('GET_MOVIES', movies => movies);

export { getMovies, reduxActionExample };

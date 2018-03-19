/* @flow */

import { fork, all } from 'redux-saga/effects';
import getMoviesSaga from './Movies/Sagas/GetMoviesSaga';

function* rootSaga() {
  yield all([fork(getMoviesSaga)]);
}

export default rootSaga;

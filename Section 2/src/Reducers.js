/* @flow */

import { combineReducers } from 'redux';
import { movies } from './Movies/Reducers/MoviesReducer';

const combinedReducers = combineReducers({ movies });

export default combinedReducers;

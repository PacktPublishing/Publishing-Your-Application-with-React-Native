/* @flow */

import { createStore } from 'redux';
import combinedReducers from './Reducers';

const store = createStore(combinedReducers);

export default store;

/* @flow */

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import combinedReducers from './Reducers';
import rootSaga from './Sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combinedReducers, applyMiddleware(sagaMiddleware));

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;

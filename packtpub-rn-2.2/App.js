/* @flow */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/Store';
import MoviesApp from './src/MoviesApp';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <MoviesApp />
      </Provider>
    );
  }
}

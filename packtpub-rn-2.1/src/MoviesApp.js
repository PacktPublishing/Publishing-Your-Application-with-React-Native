/* @flow */

import React, { Component } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { getMovies } from './Movies/Actions/GetMoviesActions';

import MovieCell from './Movies/Components/MovieCell';
import MovieInfo from './Movies/Components/MovieInfo';

class MoviesApp extends Component<{}> {
  componentDidMount() {
    this.props.dispatch(getMovies());
  }

  _keyExtractor = (item, index) => index;

  _renderItem = ({ item }) => {
    return (
      <MovieCell
        image={{ uri: item.image }}
        title={item.title}
        year={item.year}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.movies.movies}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#F5FCFF'
  }
});

export default connect(state => ({
  movies: state.movies
}))(MoviesApp);

/* @flow */

import React, { Component } from 'react'
import { Alert, StyleSheet, FlatList, View } from 'react-native'
import { connect } from 'react-redux'
import { getMovies, getMoviesDismiss } from '../Actions/GetMoviesActions'

import MovieCell from './MovieCell'

class MoviesList extends Component<{}> {
  componentDidMount() {
    this.props.dispatch(getMovies())
  }

  _onPress = (movie: Object) => {
    this.props.navigation.navigate('MovieDetail', movie)
  }

  _keyExtractor = (item, index) => index

  _renderItem = ({ item }) => {
    return (
      <MovieCell
        image={{ uri: item.image }}
        title={item.title}
        year={item.year}
        plot={item.plot}
        onPress={this._onPress}
      />
    )
  }

  componentDidUpdate() {
    if (this.props.movies.error) {
      Alert.alert('Error', this.props.movies.errorMessage, [
        { text: 'Retry', onPress: () => this.props.dispatch(getMovies()) },
        {
          text: 'Cancel',
          onPress: () => this.props.dispatch(getMoviesDismiss())
        }
      ])
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.movies.movies}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#F5FCFF'
  }
})

export default connect(state => ({
  movies: state.movies
}))(MoviesList)

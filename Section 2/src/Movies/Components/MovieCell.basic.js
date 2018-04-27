/* @flow */

import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

class MovieCell extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.movieImage} source={require('./img/movie.jpeg')} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Movie Title</Text>
          <Text style={styles.year}>2004</Text>
        </View>
        <Image style={styles.disclosure} source={require('./img/disc.png')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'lightgrey'
  },
  movieImage: {
    margin: 15,
    width: 45,
    height: 60
  },
  textContainer: {
    flex: 1
  },
  title: {
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    fontSize: 16,
    color: '#333'
  },
  year: {
    fontFamily: 'Avenir Next',
    fontWeight: '300',
    fontSize: 14,
    color: '#999'
  },
  disclosure: {
    margin: 15,
    width: 15,
    height: 28
  }
})

export default MovieCell

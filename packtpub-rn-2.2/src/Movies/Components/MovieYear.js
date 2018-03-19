/* @flow */

import React from 'react'
import { Text, StyleSheet } from 'react-native'

type Props = {
  year: number
}

class MovieYear extends React.PureComponent<Props> {
  render() {
    return <Text style={styles.year}>{this.props.year}</Text>
  }
}

const styles = StyleSheet.create({
  year: {
    fontFamily: 'Avenir Next',
    fontSize: 18,
    color: '#999',
    paddingHorizontal: 5
  }
})

export default MovieYear

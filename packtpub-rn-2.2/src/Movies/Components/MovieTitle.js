/* @flow */

import React from 'react'
import { Text, StyleSheet } from 'react-native'

type Props = {
  title: string
}

class MovieTitle extends React.PureComponent<Props> {
  render() {
    return <Text style={styles.title}>{this.props.title}</Text>
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Avenir Next',
    color: '#333',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 5,
    fontWeight: 'bold',
    fontSize: 24
  }
})

export default MovieTitle

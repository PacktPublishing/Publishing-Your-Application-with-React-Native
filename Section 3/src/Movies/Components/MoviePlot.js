/* @flow */

import React from 'react'
import { Text, StyleSheet } from 'react-native'

type Props = {
  plot: string
}

class MoviePlot extends React.PureComponent<Props> {
  render() {
    return <Text style={styles.plot}>{this.props.plot}</Text>
  }
}

const styles = StyleSheet.create({
  plot: {
    fontFamily: 'Avenir Next',
    color: '#333',
    paddingHorizontal: 5,
    paddingVertical: 10,
    paddingBottom: 20
  }
})

export default MoviePlot

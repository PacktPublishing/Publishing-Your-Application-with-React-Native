/* @flow */

import React from 'react'
import { Image, StyleSheet } from 'react-native'

type Props = {
  source: any
}

class MoviePoster extends React.PureComponent<Props> {
  render() {
    return (
      <Image
        source={this.props.source}
        style={styles.container}
        resizeMode="contain"
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200
  }
})

export default MoviePoster

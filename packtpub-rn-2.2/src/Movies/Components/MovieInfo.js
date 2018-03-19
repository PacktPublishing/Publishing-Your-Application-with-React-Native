/* @flow */

import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import MovieInfoTitle from './MovieInfoTitle'
import MovieInfoBody from './MovieInfoBody'

type Props = {
  title: string,
  body: string
}
type State = {
  isOpened: boolean
}

class MovieInfo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isOpened: false
    }
  }

  _onPress = () => {
    this.setState((state: State) => ({ isOpened: !state.isOpened }))
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this._onPress}>
        <MovieInfoTitle title={this.props.title} />
        <MovieInfoBody
          body={this.props.body}
          numberOfLines={this.state.isOpened ? 0 : 3}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  }
})

export default MovieInfo

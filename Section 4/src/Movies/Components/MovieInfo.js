/* @flow */

import React from 'react'
import { Animated, Text, StyleSheet, TouchableOpacity } from 'react-native'
import MovieInfoTitle from './MovieInfoTitle'

type Props = {
  title?: string,
  body: string
}
type State = {
  isOpened: boolean
}

class MovieInfo extends React.PureComponent<Props, State> {
  _opacity: Animated.Value
  _translateY: Animated.Value

  constructor(props: Props) {
    super(props)
    this.state = {
      isOpened: false
    }
    this._opacity = new Animated.Value(0)
    this._translateY = new Animated.Value(50)
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this._opacity, {
        toValue: 1,
        delay: 800,
        duration: 900,
        useNativeDriver: true
      }),
      Animated.timing(this._translateY, {
        toValue: 0,
        delay: 800,
        duration: 900,
        useNativeDriver: true
      })
    ]).start()
  }

  _onPress = () => {
    this.setState((state: State) => ({ isOpened: !state.isOpened }))
  }

  render() {
    return (
      <Animated.View
        style={{
          opacity: this._opacity,
          transform: [{ translateY: this._translateY }]
        }}>
        <TouchableOpacity style={styles.container} onPress={this._onPress}>
          {this.props.title ? <MovieInfoTitle title={this.props.title} /> : null}
          <Text style={styles.body} numberOfLines={this.state.isOpened ? 0 : 3}>
            {this.props.body}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    paddingBottom: 20
  },
  body: {
    flex: 1,
    fontFamily: 'Avenir Next',
    color: '#999'
  }
})

export default MovieInfo

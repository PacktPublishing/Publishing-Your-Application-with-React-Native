/* @flow */

import React from 'react'
import { Animated, Text, StyleSheet } from 'react-native'

type Props = {
  year: number
}

class MovieYear extends React.PureComponent<Props> {
  _opacity: Animated.Value

  constructor(props: Props) {
    super(props)
    this._opacity = new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(this._opacity, {
      delay: 500,
      duration: 800,
      toValue: 1,
      useNativeDriver: true
    }).start()
  }

  render() {
    return (
      <Animated.View style={{ opacity: this._opacity }}>
        <Text style={styles.year}>{this.props.year}</Text>
      </Animated.View>
    )
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

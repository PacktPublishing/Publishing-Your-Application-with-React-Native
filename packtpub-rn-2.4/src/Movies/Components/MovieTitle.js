/* @flow */

import React from 'react'
import { Text, Animated, StyleSheet } from 'react-native'

type Props = {
  title: string
}

class MovieTitle extends React.PureComponent<Props> {
  _opacity: Animated.Value

  constructor(props: Props) {
    super(props)
    this._opacity = new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(this._opacity, {
      delay: 300,
      duration: 500,
      toValue: 1,
      useNativeDriver: true
    }).start()
  }

  render() {
    return (
      <Animated.View style={{ opacity: this._opacity }}>
        <Text style={styles.title}>{this.props.title}</Text>
      </Animated.View>
    )
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

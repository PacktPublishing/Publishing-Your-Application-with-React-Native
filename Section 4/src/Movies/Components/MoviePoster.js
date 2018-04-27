/* @flow */

import React from 'react'
import {
  Image,
  LayoutAnimation,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native'

type Props = {
  source: any
}
type State = {
  zoom: boolean
}

class MoviePoster extends React.PureComponent<Props, State> {
  state: State

  constructor(props: Props) {
    super(props)
    this.state = {
      zoom: false
    }
  }

  _onPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    this.setState((prevState: State) => ({ zoom: !prevState.zoom }))
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this._onPress}>
        <Image
          source={this.props.source}
          style={this.state.zoom ? styles.zoomed : styles.image}
          resizeMode='contain'
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: 200
  },
  zoomed: {
    height: Dimensions.get('window').width
  }
})

export default MoviePoster

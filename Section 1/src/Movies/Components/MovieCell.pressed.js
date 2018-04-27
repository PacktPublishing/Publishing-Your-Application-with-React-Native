/* @flow */

import React from 'react'
import {
  TouchableOpacity,
  Alert,
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

type Props = {
  image: any,
  title: string,
  year: number
}
type State = void

class MovieCell extends React.Component<Props, State> {
  _onPress = () => {
    Alert.alert('Cell pressed', `Movie ${this.props.title}`)
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this._onPress}>
        <Image style={styles.movieImage} source={this.props.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.year}>{this.props.year}</Text>
        </View>
        <Image style={styles.disclosure} source={require('./img/disc.png')} />
      </TouchableOpacity>
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

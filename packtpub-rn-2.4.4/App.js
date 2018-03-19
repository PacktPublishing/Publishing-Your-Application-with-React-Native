/* @flow */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  View,
  UIManager,
  LayoutAnimation,
  TouchableOpacity
} from 'react-native'

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true)

export default class App extends Component<{}, { toggle: boolean }> {
  constructor(props: {}) {
    super(props)
    this.state = {
      toggle: false
    }
  }

  _onPress = () => this.setState(prevState => ({ toggle: !prevState.toggle }))

  render() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={this._onPress}
          style={[styles.top, { flex: this.state.toggle ? 1 : 3 }]}
        />
        <TouchableOpacity
          activeOpacity={1}
          onPress={this._onPress}
          style={[styles.bottom, { flex: this.state.toggle ? 3 : 1 }]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  top: {
    backgroundColor: 'green'
  },
  bottom: {
    backgroundColor: 'yellow'
  }
})

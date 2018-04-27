/* @flow */

import React from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Avenir Next',
    color: '#999'
  }
})

export default function(props: { body: string, style?: any }) {
  return (
    <Text {...props} style={[styles.body, props.style]}>
      {props.body}
    </Text>
  )
}

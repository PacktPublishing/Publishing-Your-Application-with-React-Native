/* @flow */

import React from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Avenir Next',
    color: '#333',
    fontWeight: 'bold',
    paddingVertical: 5
  }
})

export default function(props: { title: string, style?: any }) {
  return <Text style={[styles.title, props.style]}>{props.title}</Text>
}

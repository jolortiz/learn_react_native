import React, { Component, } from 'react'
import { View, Text, StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  }
})

export class Bold extends Component {
  render() {
    return (
      <Text style={styles.bold}>
        {this.props.children}
      </Text>
    )
  }
}

export class Italic extends Component {
  render() {
    return (
      <Text style={styles.italic}>
        {this.props.children}
      </Text>
    )
  }
}
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
  return (
    <View>
      <Text style={customHeader.titleHeader}>Litle Lemon</Text>
    </View>
  )
}

const customHeader = StyleSheet.create({
  titleHeader: {
    backgroundColor: 'yellow',
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
})

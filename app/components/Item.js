import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Item({ name }) {
  return (
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{name}</Text>
    </View>
  )
}

const menuStyles = StyleSheet.create({
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: 'black',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 36,
  },
})

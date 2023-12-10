import * as React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'

export default function LittleLemonFooter() {
  return (
    <View style={footerStyle.container}>
      <Text style={footerStyle.innerText}>
        all rights reserved by little lemon , 2024
      </Text>
    </View>
  )
}

const footerStyle = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  innerText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
})

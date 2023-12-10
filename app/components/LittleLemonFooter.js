import * as React from 'react'
import { View, Text } from 'react-native'

export default function LittleLemonFooter() {
  return (
    <View
      style={{
        backgroundColor: '#F4CE14',
        justifyContent: 'flex-end',
        paddingBottom: 10,
      }}
    >
      <Text style={{ fontSize: 18, textAlign: 'center', color: 'black' }}>
        all rights reserved by little lemon , 2024
      </Text>
    </View>
  )
}

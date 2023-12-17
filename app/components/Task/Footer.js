import React from 'react'
import { View, Text } from 'react-native'

export default function Footer() {
  return (
    <View style={{ backgroundColor: 'yellow', marginVertical: 120 }}>
      <Text
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          textAlign: 'center',
        }}
      >
        all rights reserved by little lemmon ,2024
      </Text>
    </View>
  )
}

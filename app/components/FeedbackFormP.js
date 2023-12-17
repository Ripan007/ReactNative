import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default function FeedbackFormP() {
  const [firstName, onChangeFirstName] = useState('')
  return (
    <ScrollView>
      <Text>Little Lemon</Text>
      <TextInput
        style={formCustom.headerText}
        value={firstName}
        onChangeText={onChangeFirstName}
        placeholder='enter name'
      />
    </ScrollView>
  )
}

const formCustom = StyleSheet.create({
  headerText: {
    backgroundColor: '#fff',
    width: 200,
    borderRadius: 3,
    padding: 10,
  },
})

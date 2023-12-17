import React, { useState } from 'react'
import { View, TextInput } from 'react-native'

export default function Form() {
  const [text, onChangeText] = useState('welcome')
  return (
    <View style={{ paddingHorizontal: 30 }}>
      <TextInput
        // placeholder='first name'
        onChangeText={onChangeText}
        value={text}
        style={{
          backgroundColor: 'white',
          borderRadius: 4,
          padding: 10,
          fontSize: 20,
          margin: 10,
        }}
      />
      <TextInput
        // placeholder='first name'
        onChangeText={onChangeText}
        value={text}
        style={{
          backgroundColor: 'white',
          borderRadius: 4,
          padding: 10,
          fontSize: 20,
          margin: 10,
        }}
      />
      <TextInput
        // placeholder='first name'
        onChangeText={onChangeText}
        value={text}
        style={{
          backgroundColor: 'white',
          borderRadius: 4,
          padding: 40,
          fontSize: 20,
          margin: 10,
        }}
      />
      <TextInput
        // placeholder='first name'
        onChangeText={onChangeText}
        value={text}
        style={{
          backgroundColor: 'white',
          borderRadius: 4,
          padding: 40,
          fontSize: 20,
          margin: 10,
        }}
      />
      <TextInput
        // placeholder='first name'
        onChangeText={onChangeText}
        value={text}
        style={{
          backgroundColor: 'white',
          borderRadius: 4,
          padding: 40,
          fontSize: 20,
          margin: 10,
        }}
      />
    </View>
  )
}

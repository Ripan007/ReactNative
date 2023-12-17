import React from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native'
import Form from './Form'

export default function Welcome() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'web' ? 'padding' : 'height'}
    >
      <ScrollView style={customWelcome.container} keyboardDismissMode='on-drag'>
        <Text style={customWelcome.containerTextHeader}>
          welcome to little lemon
        </Text>
        <Text style={customWelcome.containerText}>
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum
        </Text>
        <Form />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const customWelcome = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 40,
  },
  containerTextHeader: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  },
  containerText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
})

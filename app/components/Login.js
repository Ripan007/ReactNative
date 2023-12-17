import React from 'react'
import { Alert, StyleSheet, TextInput, View } from 'react-native'

export default function Login() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextInput
        style={customLogin.textHolder}
        placeholder='email'
        // keyboardType='email-address'
        onFocus={() => {
          Alert.alert('first name is focused')
        }}
      />
      <TextInput
        style={customLogin.textHolder}
        placeholder='password'
        secureTextEntry={true}
        keyboardType='phone-pad'
        onBlur={() => {
          Alert.alert('password is blurred')
        }}
      />
    </View>
  )
}

//  keyboard typ , secure text entry
const customLogin = StyleSheet.create({
  textHolder: {
    backgroundColor: 'white',
    width: 200,
    borderRadius: 2,
    margin: 10,
    padding: 10,
  },
})

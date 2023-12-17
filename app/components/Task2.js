import { useState } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const Task2 = () => {
  const [show, setShow] = useState(true)
  const [mail, setMail] = useState('test@meta.com')
  const [password, setPassword] = useState('00000000')
  return (
    <View>
      <Text>Login to continue</Text>
      <TextInput value={mail} />
      <TextInput value={password} secureTextEntry={true} />
      <Pressable>
        {show && (
          <Text
            onPress={() => {
              setShow(!show)
            }}
            style={Task.button}
          >
            Loggen in
          </Text>
        )}
      </Pressable>
      {!show && <Text onPress={() => setShow(!show)}>you are logged in</Text>}
    </View>
  )
}

export default Task2

const Task = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    width: 100,
    borderRadius: 20,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
})

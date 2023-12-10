import { StyleSheet, Text, View } from 'react-native'

export default function LittleLemonHeader() {
  return (
    <View style={headerStyle.container}>
      <Text
        style={{
          fontSize: 30,
          color: 'black',
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'black',
        }}
      >
        Little Lemon
      </Text>
    </View>
  )
}

const headerStyle = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: 'orange',
    justifyContent: 'center',
  },
})

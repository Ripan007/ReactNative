import { Text, View } from 'react-native'

export default function LittleLemonHeader() {
  return (
    <View
      style={{ flex: 0.1, backgroundColor: 'yellow', justifyContent: 'center' }}
    >
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

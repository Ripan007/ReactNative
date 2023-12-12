import { View, Text, StyleSheet } from 'react-native'

export default function LittleLemonHeaders() {
  return (
    <View>
      <Text style={headertext.header}>Little Lemon</Text>
    </View>
  )
}

const headertext = StyleSheet.create({
  header: {
    backgroundColor: '#EE9972',
    textAlign: 'center',

    fontSize: 30,
  },
})

// #F4CE14, #EE9972, #333333, #EDEFEE, black and white.

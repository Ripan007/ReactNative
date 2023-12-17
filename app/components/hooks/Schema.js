import { StyleSheet, useColorScheme } from 'react-native'
import { View, Text } from 'react-native'

const Schema = () => {
  const colorSchema = useColorScheme()
  return (
    <View
      style={[
        customColor.main,
        colorSchema === 'light'
          ? { backgroundColor: 'white' }
          : { backgroundColor: 'black' },
      ]}
    >
      <Text>color schema : {colorSchema}</Text>
    </View>
  )
}

export default Schema

const customColor = StyleSheet.create({
  main: {
    flex: 1,
  },
})

import { View ,Text } from 'react-native'

export default function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint}>
      <Text>{dataPoint}</Text>
    </View>
  ))
}

import { useWindowDimensions } from 'react-native'
import { View, Text } from 'react-native'
import { useDeviceOrientation } from '@react-native-community/hooks'
const Dimension = () => {
  const { fontScale, height, width } = useWindowDimensions()
  const orientation = useDeviceOrientation()
  console.log('is orientation portrait: ', orientation.portrait)
  console.log('is orientation landscape: ', orientation.landscape)

  return (
    <View>
      <Text>window dimension</Text>
      <Text>font scale:{fontScale}</Text>
      <Text>height:{height}</Text>
      <Text>width:{width}</Text>
    </View>
  )
}

export default Dimension

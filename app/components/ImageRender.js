import { Text, StyleSheet, Image, ScrollView } from 'react-native'

const ImageRender = () => {
  return (
    <ScrollView>
      <Text style={image.header}>show images</Text>

      <Image
        style={image.nunImage}
        accessible={true}
        accessibilityLabel={'nun image'}
        source={require('../components/img/nun.jpg')}
      />
      <Image
        style={image.nunImage}
        accessible={true}
        accessibilityLabel={'nun image'}
        source={require('../components/img/nun.jpg')}
      />
      <Image
        style={image.nunImage}
        accessible={true}
        accessibilityLabel={'nun image'}
        source={require('../components/img/nun.jpg')}
      />
      <Image
        style={image.nunImage}
        accessible={true}
        accessibilityLabel={'nun image'}
        source={require('../components/img/nun.jpg')}
      />
      <Image
        style={image.nunImage}
        accessible={true}
        accessibilityLabel={'nun image'}
        source={require('../components/img/nun.jpg')}
      />
    </ScrollView>
  )
}
export default ImageRender

const image = StyleSheet.create({
  header: {
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'white',
    marginVertical: 10,
  },
  nunImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
    margin: 10,
  },
})

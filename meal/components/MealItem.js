import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
export default function MealItem({ title, imageUrl }) {
  return (
    <View>
      <Pressable>
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

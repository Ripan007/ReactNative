import { useNavigation } from '@react-navigation/native'
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from 'react-native'
import MealDetails from '../MealDetails'


export default function MealItem({
  id,
  title,
  imageUrl,
  affordability,
  complexity,
  duration,
}) {
  const navigation = useNavigation()
  function selectMealItemHandler() {
    navigation.navigate('MealDetail', {
      mealId: id,
    })
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={selectMealItemHandler}
        style={({ pressed }) => (pressed ? 'styles.buttonPressed' : null)}
        android_ripple={{ color: '#ccc' }}
      >
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
          affordability={affordability}
          complexity={complexity}
          duration={duration}
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 15,
    elevation: 4,
    overflow: Platform.OS ? 'hidden' : 'visible',
    borderRadius: 10,
    shadowColor: '#000',
    shadowRadius: 8,
    backgroundColor: '#fff',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 10,
  },

  buttobnPressed: {
    opacity: 0.4,
  },
})

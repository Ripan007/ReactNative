import { Image, Text, View, StyleSheet, Button } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import Subtitle from '../components/MealDetail/Subtitle'
import List from '../components/MealDetail/List'
import { useContext, useLayoutEffect } from 'react'
import IconButton from '../components/IconButton'
import { FavouritesContext } from '../store/context/favorites-context'

export default function MealDetailScreen({ route, navigation }) {
  const favouritesMealCtx = useContext(FavouritesContext)
  const mealId = route.params.mealId
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)
  const mealIsFavourite = favouritesMealCtx.ids.includes(mealId)
  function changeFavoriteStatusHandler() {
    if (mealIsFavourite) {
      favouritesMealCtx.removeFavorite(mealId)
    } else {
      favouritesMealCtx.addFavorite(mealId)
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavourite ? 'star' : 'star-outline'}
            color="#ffff"
            onpress={changeFavoriteStatusHandler}
          />
        )
      },
    })
  }, [navigation, changeFavoriteStatusHandler])
  return (
    <View>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailtext}
      />
      <View>
        <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal.ingredients} />
        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal.steps} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  detailtext: {
    color: '#ffff',
  },
  image: {
    width: '100%',
    height: 350,
  },
})

import { useContext } from 'react'
import { Text } from 'react-native'
import { FavouritesContext } from '../store/context/favorites-context'
import { MEALS } from '../data/dummy-data'
import MealsList from '../components/MealList/MealsList'
export default function FavouritesScreen() {
  const favoriteMealCtx = useContext(FavouritesContext)
  const favoriteMeal = MEALS.filter((meal) =>
    favoriteMealCtx.ids.includes(meal.id)
  )
  if (favoriteMeal.length === 0) {
    return <Text>you have no  favourite meals yet</Text>
  }
  return <MealsList items={favoriteMeal} />
}

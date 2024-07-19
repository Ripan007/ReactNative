
import { CATEGORIES, MEALS } from '../data/dummy-data'
import { useLayoutEffect } from 'react'
import MealsList from '../components/MealList/MealsList'

export default function MealsOverviewScreen({ route, navigation }) {
  const cartId = route.params.categoryId

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(cartId) >= 0
  })
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === cartId
    ).title
    navigation.setOptions({
      title: categoryTitle,
    })
  }, [cartId, navigation])
  return <MealsList items={displayedMeals} />
}

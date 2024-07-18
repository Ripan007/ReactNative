import { View, Text, StyleSheet, FlatList } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

export default function MealsOverviewScreen({ route }) {
  const cartId = route.params.categoryId

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(cartId) >= 0
  })

  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} imageUrl={ itemData.item.imageUrl}/>
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

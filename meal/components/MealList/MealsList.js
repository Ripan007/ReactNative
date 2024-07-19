import { View ,StyleSheet, FlatList } from 'react-native'
import MealItem from './MealItem'

export default function MealsList({items}) {
   function renderMealItem(itemData) {
    const item = itemData.item
    const componentItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    }
    return <MealItem {...componentItemProps} />
  }
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        data={items}
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

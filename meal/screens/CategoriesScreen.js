import { FlatList, View } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTitle from '../components/CategoryGridTitle'



export default function CategoriesScreen({navigation}) {
  function renderComponentItem(itemData) {
    function OverviewpressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId:itemData.item.id

       })
     }
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={OverviewpressHandler}
      />
    )
  }
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderComponentItem}
        numColumns={2}
      />
    </View>
  )
}

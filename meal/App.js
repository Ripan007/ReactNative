import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator()

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
function MyStack() {
  return <Stack.Navigator initialRouteName="MealsCategories">
    <Stack.Screen name='MealsCategories' component={CategoriesScreen}/>
    <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}/>
  </Stack.Navigator>
}
export default function App() {
  return <NavigationContainer>
    <MyStack/>
  </NavigationContainer>
}
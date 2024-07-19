import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer'
//  folder link
import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealDetailScreen from './screens/MealDetailScreen'
import FavouritesScreen from './screens/FavouritesScreen'
import FavouritesContextProvider from './store/context/favorites-context'
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerContentStyle: { backgroundColor: '#985252' },
        drawerActiveTintColor: '#b41818',
        drawerInactiveTintColor: '#fff',
        drawerActiveBackgroundColor: 'red',
        headerStyle: {
          backgroundColor: '#b41818',
        },
        headerTintColor: '#fff',
        sceneContainerStyle: {
          backgroundColor: '#985252',
        },
        headerTitleAlign: 'center',
      }}
    >
      <Drawer.Screen
        options={{
          title: 'All Categories',
          drawerIcon: ({ size, color }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
        name="categories"
        component={CategoriesScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
        name="favourites"
        component={FavouritesScreen}
      />
    </Drawer.Navigator>
  )
}
function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="MealsCategories"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#b41818',
        },
        headerTintColor: '#fff',
        contentStyle: {
          backgroundColor: '#985252',
        },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        options={{
          title: 'All Categories',
          headerShown: false,
        }}
        name="Drawer"
        component={DrawerNavigator}
      />
      <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
      <Stack.Screen
        options={{
          title: 'about the meal',
        }}
        name="MealDetail"
        component={MealDetailScreen}
      />
    </Stack.Navigator>
  )
}
export default function App() {
  return (
    <FavouritesContextProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </FavouritesContextProvider>
  )
}

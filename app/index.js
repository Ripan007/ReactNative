import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from './components/Navigation/Welcome'
import MenuScreen from './components/Navigation/MenuScreen'
const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: 'lightblue' },
        }}
        initialRouteName='Welcome'
      >
        <Stack.Screen
          options={{ title: 'Home' }}
          name='Welcome'
          component={Welcome}
        />
        <Stack.Screen name='menu' component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
// <ImageBackground

//   resizeMode='stretch'
//   style={{ flex: 1, justifyContent: 'center' }}
//   source={require('./components/img/nun.jpg')}
//
//   <ImageRender />

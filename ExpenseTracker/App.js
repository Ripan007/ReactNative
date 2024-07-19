import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AllExpenses from './screens/AllExpenses'

const Stack = createNativeStackNavigator()

function Mystack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="allexpenses" component={AllExpenses} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer >
      <Mystack />
    </NavigationContainer>
  )
}


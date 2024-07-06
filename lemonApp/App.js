import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
const Tab = createBottomTabNavigator()

function Home() {
    return <Text>home page</Text>
}

function History() {
    return <Text>home page</Text>
}

function Info() {
    return <Text>home page</Text>
}
function Log() {
    return <Text>home page</Text>
}
function Stack() {
    return <Text>home page</Text>
}
function MyStack() {
    return (
        <Tab.Navigator
            

            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (route.name === 'History') {
                        iconName = 'alarm-outline'
                    } else if (route.name === 'Info') {
                        iconName = 'alarm-outline'
                    } else if (route.name === 'Log') {
                        iconName = 'alarm-outline'
                    } else if (route.name === 'Stack') {
                        iconName = 'alarm-outline'
                    }
                    return (
                        <Ionicons name={iconName} color={color} size={size} />
                    )
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor:'gray'
            })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="History" component={History} />
            <Tab.Screen name="Info" component={Info} />
            <Tab.Screen name="Log" component={Log} />
            <Tab.Screen name="Stack" component={Stack} />
        </Tab.Navigator>
    )
}

function App() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}

export default App

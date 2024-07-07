import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from './components/screen/Welcome'
import Subscribe from './components/screen/Subscribe'
import { View, Text, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
const Stack = createNativeStackNavigator()

function ButtonUi() {
    return (
        <View style={{flexDirection:'row-reverse',alignItems:'center'}}>
            <Text style={{color:'blue',fontSize:20,paddingHorizontal:10}}>Welcome</Text>
            <AntDesign name="back" size={24} color="black" />
        </View>
    )
}

function Screen() {
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
                options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
                name="Welcome"
                component={Welcome}
            />
            <Stack.Screen
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Pressable
                            onPress={() => navigation.navigate('Welcome')}>
                            <ButtonUi />
                        </Pressable>
                    ),
                    headerTitleAlign: 'center',
                    headerTitleStyle: { fontWeight: 'bold' },
                })}
                name="Subscribe"
                component={Subscribe}
            />
        </Stack.Navigator>
    )
}

function App() {
    return (
        <NavigationContainer>
            <Screen />
        </NavigationContainer>
    )
}
export default App

import { View, Text, StyleSheet } from 'react-native'
import Header from './components/Header'
import { StatusBar } from 'expo-status-bar'
import MainContent from './components/MainContent'

function App() {
    return (
        <View style={styles.rootScreen}>
            <StatusBar style="auto" />
            <Header />

            <MainContent />
        </View>
    )
}
export default App
const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        backgroundColor: 'black',
    },
})

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'
import Footer from './components/Footer'
import Welcome from './components/Welcome'

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View
                style={{
                    flex: 0.1,
                    backgroundColor: 'red',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}>
                <Header />
            </View>
            <View style={styles.WelcomeContainer}>
                <Welcome />
            </View>

            <View
                style={{
                    // flex: 0.2,
                    backgroundColor: 'orange',
                    // alignItems:'center',
                    justifyContent: 'flex-end',
                }}>
                <Footer />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25bc78',
    },
    WelcomeContainer: {
        flex: 0.8,
        backgroundColor: 'black',
    },
})

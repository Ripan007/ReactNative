import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {
    return (
        <View style={styles.rootScreen}>
            <View style={styles.headerLayout}>
                <Header />
            </View>
            <View style={styles.mainLayout}>
                <Main />
            </View>

        </View>
    )
}

export default App

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    headerLayout: {
        flex: 0.1,
        backgroundColor: '#FFD3B6',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    mainLayout: {
        flex: 0.9,
        backgroundColor: '#405D72',

        paddingVertical: 20,
    },

})

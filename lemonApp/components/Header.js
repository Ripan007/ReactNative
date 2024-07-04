import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
    return <Text style={styles.headerText}>little lemon</Text>
}

export default Header

const styles = StyleSheet.create({
    headerText: {
        fontSize: 40,
        fontWeight: '500',
    },
})

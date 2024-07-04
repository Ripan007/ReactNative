import { View, Text, StyleSheet } from 'react-native'

function Header() {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>little lemon</Text>
        </View>
    )
}
export default Header

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#96C9F4',
        flex: 0.1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 32,
        fontWeight: '300',
    },
})

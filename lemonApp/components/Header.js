import { Text, View, StyleSheet } from 'react-native'

function Header() {
  return (
    <View style={styles.headerMain}>
      <Text style={styles.headerText}>header</Text>
    </View>
  )
}

export default Header
const styles = StyleSheet.create({
  headerMain: {
    flex: 0.2,
    justifyContent: 'center',
    backgroundColor: '#000',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    padding: 30,
    fontSize: 30,
    textTransform: 'uppercase',
  },
})

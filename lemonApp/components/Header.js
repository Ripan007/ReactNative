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
    // flex: 0.1,
    // justifyContent: 'center',
    // backgroundColor: '#000',
    // alignItems: 'flex-start',
  },
  headerText: {
    color: '#000',
    // paddingVertical: 30,
    // paddingHorizontal: 10,
    fontSize: 23,
      textTransform: 'uppercase',
    fontWeight:'bold'
  },
})


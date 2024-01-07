import { Button, StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.innerConRed}></View>
      <View style={styles.innerConBlue}></View>
      <View style={styles.innerConYellow}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    padding: 20,
    justifyContent: 'space-between',
  },
  innerConBlue: {
    backgroundColor: 'red',
    flex: 0.3,
    borderWidth: 5,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  innerConRed: {
    backgroundColor: 'blue',
    flex: 0.3,
    borderWidth: 5,
  },
  innerConYellow: {
    backgroundColor: 'yellow',
    flex: 0.3,
    borderWidth: 5,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
})

//  i have to draw those structure on paper and then  i have to code those things  down while coding


//  flex box is imortant
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default function WelcomeScreen() {
  return (
    <View style={welcomeStyles.container}>
      <ScrollView indicatorStyle='white' style={{ backgroundColor: 'black' }}>
        <Text style={welcomeStyles.headerText}>Welcome to Little Lemon</Text>
        <Text style={welcomeStyles.innerText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear your experience with us! Little Lemon is a charming
          neighborhood bistro that serves simple food and classic cocktails in a
          lively but casual environment. We would love to hear your experience
          with us! Little Lemon is a charming neighborhood bistro that serves
          simple food and classic cocktails in a lively but casual environment.
          We would love to hear your experience with us! Little Lemon is a
          charming neighborhood bistro that serves simple food and classic
          cocktails in a lively but casual environment. We would love to hear
          your experience with us! Little Lemon is a charming neighborhood
          bistro that serves simple food and classic cocktails in a lively but
          casual environment. We would love to hear your experience with us!
        </Text>
      </ScrollView>
    </View>
  )
}

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  innerText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
})

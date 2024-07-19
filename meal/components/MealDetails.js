import { View, Text, StyleSheet } from 'react-native'

export default function MealDetails({
  duration,
  affordability,
  complexity,
  style,

  textStyle,
}) {
  return (
    <View style={[styles.description,style]}>
      <Text style={textStyle}>{duration}</Text>
      <Text style={textStyle}>{affordability.toUpperCase()}</Text>
      <Text style={textStyle}>{complexity.toUpperCase()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  description: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 80,
    paddingVertical: 5,
  },
})

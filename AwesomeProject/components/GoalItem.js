import { View, Text, StyleSheet, Pressable } from 'react-native'
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#eeedeb' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        // style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    // padding: 10,
    marginVertical: 6,
    backgroundColor: '#6962ad',
    borderRadius: 25,
  },
  goalText: {
    padding:19,
    color: '#fff',
    textTransform: 'capitalize',
  },
  pressedItem:{
    opacity:0.5
  }
})

import { Pressable, View, Text, StyleSheet, Platform } from 'react-native'

export default function CategoryGridTitle({ title, color,onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: '#ccc' }}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    borderRadius:8,
    margin: 16,
    height: 150,
    elevation: 4,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowRadius: 8,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  button: {
    flex: 1,

  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonPressed: {
    opacity: 0.5,
  },
})

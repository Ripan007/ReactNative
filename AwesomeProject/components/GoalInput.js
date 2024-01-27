import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native'
import { useState } from 'react'
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function AddGoalHandler() {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
        />
        <View style={styles.inputGoal}>
          <TextInput
            placeholder='your course goal'
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={[styles.buttons]}>
            <Button
              title='add goal'
              color={'#96E9C6'}
              onPress={AddGoalHandler}
            />
          </View>
          <View style={styles.buttons}>
            <Button title='cancel' color={'#D04848'} onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    // paddingBottom: 19,
    // borderBottomWidth: 2,
    alignItems: 'center',
    backgroundColor: '#D4E7C5',
  },
  inputGoal: {
    padding: 8,
    borderWidth: 2,
    width: '80%',
    marginRight: 5,
    borderColor: '#eeedeb',
    borderRadius: 6,

  },
  buttons: {
    width: '30%',
    marginVertical: 10,
    marginHorizontal: 4,
  },
  image: { width: 150, height: 150, borderRadius: 100, marginVertical: 10 },
})

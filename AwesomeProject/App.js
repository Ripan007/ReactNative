import { useState } from 'react'
import { View, StyleSheet, FlatList, Button } from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoal, setCourseGoal] = useState([])

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
  }
  function addGoalHandler(enteredGoalText) {
    setCourseGoal((currCourseGoal) => [
      ...currCourseGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ])
    endAddGoalHandler()
  }

  function deleteGoalHandler(id) {
    setCourseGoal((currCourseGoal) => {
      return currCourseGoal.filter((goal) => goal.id !== id)
    })
  }
  return (
    <View style={styles.appContainer}>
      <Button title='add new goal' onPress={startAddGoalHandler} />
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={modalIsVisible}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.renderGoal}>
        <FlatList
          data={courseGoal}
          keyExtractor={(item, index) => {
            return item.id
          }}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.id}
              />
            )
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    // backgroundColor: '#efecec',
  },

  renderGoal: {
    paddingTop: 10,
  },
})

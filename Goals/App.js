import { useState } from 'react'
import { View, StyleSheet, FlatList, Button } from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
import { StatusBar } from 'expo-status-bar'
export default function App() {
    const [modalIsVisible, setmodalIsVisible] = useState(false)
    const [courseGoal, setCourseGoal] = useState([])

    function addGoalHandler(enteredGoalText) {
        setCourseGoal((currCoarseGoal) => [
            ...currCoarseGoal,
            { text: enteredGoalText, id: Math.random().toString() },
        ])
        endAddGoalHandler()
    }
    function deleteGoalHandler(id) {
        setCourseGoal((currCourseGoal) => {
            return currCourseGoal.filter((item) => item.id !== id)
        })
    }
    function addStartGoalHandler() {
        setmodalIsVisible(true)
    }

    function endAddGoalHandler() {
        setmodalIsVisible(false)
    }
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <View style={styles.innerContainer}>
                <Button
                    title="add new goal"
                    color={'#256'}
                    onPress={addStartGoalHandler}
                />
                <GoalInput
                    onAddGoal={addGoalHandler}
                    visible={modalIsVisible}
                    onCancel={endAddGoalHandler}
                />

                <View style={styles.seperator}></View>
                <View style={styles.goalContainer}>
                    <FlatList
                        alwaysBounceVertical={false}
                        keyExtractor={(item, index) => {
                            return item.id
                        }}
                        data={courseGoal}
                        renderItem={(courseData) => (
                            <GoalItem
                                id={courseData.item.id}
                                text={courseData.item.text}
                                onDeleteItem={deleteGoalHandler}
                            />
                        )}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        paddingVertical: 40,
        paddingHorizontal: 20,
    },

    seperator: {
        marginVertical: 10,
        borderBottomColor: '#000',
        borderBottomWidth: 2,
    },
    goalContainer: {},
})



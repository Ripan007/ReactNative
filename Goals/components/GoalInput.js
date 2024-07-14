import { View, TextInput, StyleSheet, Text, Modal, Image } from 'react-native'
import { useState } from 'react'
export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('')
    function inputGoalHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
                <View style={styles.inputContainerBox}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginBottom: 10,
                        }}>
                        <Image
                            style={{
                                height: 100,
                                width: 100,
                                borderRadius: 50,
                            }}
                            source={{
                                uri: 'https://images.pexels.com/photos/25913170/pexels-photo-25913170/free-photo-of-a-black-and-white-photo-of-a-small-white-mouse.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                            }}
                        />
                    </View>

                    <View>
                        <TextInput
                            placeholder="your course goal"
                            style={styles.inputBox}
                            onChangeText={inputGoalHandler}
                            value={enteredGoalText}
                        />
                    </View>

                    <View style={styles.buttonBox}>
                        <Text onPress={addGoalHandler} style={styles.button}>
                            add goal
                        </Text>
                        <Text
                            accessibilityLabel="press this button"
                            onPress={props.onCancel}
                            style={styles.button}>
                            cancel
                        </Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainerBox: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 40,
        // alignItems:'center'
    },
    inputBox: {
        borderWidth: 1,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        textTransform: 'capitalize',
        shadowColor: '#000',
        // elevation: 10,
        shadowRadius: 10,
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
        backgroundColor: 'lightblue',
        textTransform: 'uppercase',
        color: '#fff',
        borderWidth: 1,
        shadowColor: '#000',
        // elevation: 10,
        shadowRadius: 10,
        width: '40%',
        textAlign: 'center',
    },
    buttonBox: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: 90,
        alignItems: 'center',
    },
})

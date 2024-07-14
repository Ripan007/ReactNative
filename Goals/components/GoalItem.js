import { Text, StyleSheet, Pressable } from 'react-native'
export default function GoalItem(props) {
    return (
        <Pressable
            style={({ pressed }) => pressed && styles.pressIn}
            android_ripple={{ color: '#fff' }}
            onPress={props.onDeleteItem.bind(this, props.id)}>
            <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    goalText: {
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        color: '#fff',
        textTransform: 'capitalize',
        marginVertical: 5,
        // textAlign:'center'
    },
    pressIn: {
        opacity: 0.5,
    },
})

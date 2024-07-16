import { View, Text, StyleSheet, Pressable } from 'react-native'
export default function PrimaryButton({ children,onPress }) {
    return (
        <Pressable onPress={onPress}
            style={({ pressed }) =>
                pressed
                    ? [styles.pressed, styles.buttonContainer]
                    : styles.buttonContainer
            }>
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor:'blue',

        // width: '40%',
        borderRadius: 30,
        // textAlign: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 30,
        // borderRadius:30,
        // overflow: 'hidden',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.5,
    },
})

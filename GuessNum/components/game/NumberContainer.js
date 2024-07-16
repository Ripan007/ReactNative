import {View,Text ,StyleSheet} from 'react-native'
export default function NumberContainer({ children }) {
    return <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{children }</Text>
    </View>
}


const styles = StyleSheet.create({
    numberContainer: {
        borderWidth: 2,
        borderColor: 'orange',
        marginVertical: 40,
        marginHorizontal: 50,
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical:30


    },
    numberText: {
        textAlign: 'center',
        fontSize: 40,
        color: 'orange',
        fontWeight:'bold'

    }

})


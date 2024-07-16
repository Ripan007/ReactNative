import { Text, View, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'
export default function Title({ children }) {
    return (
        <View style={styles.title}>
            <Text style={styles.titleText}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {


        marginTop: 50,
        marginHorizontal:40,
        borderWidth: 3,
        borderColor: Colors.title,
   
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    titleText: {
        textAlign: 'center',
        fontSize: 25,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: Colors.titleText,
        // fontFamily:'roboto'
    },
})



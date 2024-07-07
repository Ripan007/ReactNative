import {
    Text,
    View,
    Pressable,
    StyleSheet,
    Image,
    TextInput,
    Alert,
} from 'react-native'

function Subscribe() {
    function onChangeHandle() {}
    return (
        <View   style={styles.screen}>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://images.pexels.com/photos/26611646/pexels-photo-26611646/free-photo-of-a-small-wooden-stool-with-a-cup-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                }}
            />
            <Text style={styles.heading}>
                subscribe to our newsletter for our delicious lattest recepie!
            </Text>
            <TextInput
                keyboardType="email-address"
                onChangeText={onChangeHandle}
                placeholder="Type your Email"
                style={styles.input}
            />
            <Pressable
                android_ripple={{ color: '#727070' }}
                style={styles.button}
                onPress={() =>
                    Alert.alert('thanks for subscribing,stay tuned')
                }>
                <Text style={styles.buttonText}>subscribe</Text>
            </Pressable>
        </View>
    )
}
export default Subscribe

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 40,
        paddingVertical: 30,
        alignItems: 'center',
        // justifyContent: 'space-evenly',
    },
    image: {
        height: '20%',
        width: '50%',
        borderRadius: 10,
    },
    heading: {
        fontSize: 25,
        // fontWeight: 'bold',
        color: 'gray',
        textAlign: 'center',
        textTransform: 'capitalize',
        paddingVertical: 50,
    },
    input: {
        borderWidth: 1,
        width: '100%',
        borderRadius: 10,
        padding: 10,
        fontSize: 18,
        color: 'gray',
    },
    button: {
        backgroundColor: '#758694',
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginVertical: 40,
    },
    buttonText: {
        textAlign: 'center',
        textTransform: 'capitalize',
        color: '#ffff',
        fontSize: 20,
    },
})

import { Text, StyleSheet, View, Image, Pressable } from 'react-native'

function Welcome({ navigation }) {
    return (
        <View style={styles.screen}>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://images.pexels.com/photos/26611646/pexels-photo-26611646/free-photo-of-a-small-wooden-stool-with-a-cup-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                }}
            />
            <Text  style={styles.heading}>
                little lemon , your local mediterranean bistro
            </Text>
            <Pressable android_ripple={{color:'#727070'}}
                style={styles.button}
                onPress={() => navigation.navigate('Subscribe')}>
                <Text style={styles.buttonText}>newsletter</Text>
            </Pressable>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 40,
        paddingVertical: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        height:'50%',
        width: '100%',
        borderRadius:10
    },
    heading: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform:'capitalize'
    },
    button: {
        backgroundColor: '#758694',
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        textAlign: 'center',
        textTransform: 'capitalize',
        color: '#ffff',
        fontWeight: '23',
    },
})

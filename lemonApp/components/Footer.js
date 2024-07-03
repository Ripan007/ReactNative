import { StyleSheet, Text, View } from "react-native"

function Footer() {
    return (
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>all rights reserved by little lemon,2022</Text>
      </View>
    )

 }
export default Footer

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: 'yellow',

    },
    footerText: {
        textAlign:'center'
    }
})
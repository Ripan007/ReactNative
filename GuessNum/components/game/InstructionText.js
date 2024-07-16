import { Text,StyleSheet} from 'react-native';
export default function InstructionText({ children ,style}) {
  return <Text style={[styles.instruction,style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instruction: {
    textTransform: 'capitalize',
    fontSize: 25,
    color: 'blue',
    fontWeight:'bold'

  }
})
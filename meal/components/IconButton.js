import { Pressable } from "react-native";
import {Ionicons} from '@expo/vector-icons'

export default function IconButton({icon,color ,onpress}) {
  return (
    <Pressable onPress={onpress}>
      <Ionicons name={ icon} size={23} color={color} />
    </Pressable>
  )
}
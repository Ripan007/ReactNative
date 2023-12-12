import { View } from 'react-native'
import FeedbackFormP from './FeedbackFormP'

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}
      >
        {/* <LittleLemonHeaders /> */}
        <FeedbackFormP />
      </View>

      {/* <View><LittleLemonFooter /></View> */}
    </>
  )
}

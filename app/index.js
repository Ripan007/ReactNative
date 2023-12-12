import { View } from 'react-native'

import TaskSectionlist from './components/TaskSectionlist'

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
        <TaskSectionlist />
      </View>

      {/* <View><LittleLemonFooter /></View> */}
    </>
  )
}

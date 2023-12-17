import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'

const Toggle = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <View>
      <Pressable
        onPress={() => {
          setShowMenu(!showMenu)
        }}
      >
        <Text
          style={{
            backgroundColor: 'white',
            margin: 19,
            textAlign: 'center',
            width: 100,
            padding: 10,
            borderRadius: 4,
            textTransform: 'uppercase',
            fontWeight: 'bold',
          }}
        >
          {showMenu ? 'home' : 'view menu'}
        </Text>
      </Pressable>
      {!showMenu && <Text>default content</Text>}
      {showMenu && (
        <View>
          <Text>home content</Text>
          <Text>having fun with reat native pressprops</Text>
        </View>
      )}
    </View>
  )
}

export default Toggle

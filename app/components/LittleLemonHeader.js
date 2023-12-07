import { Text, View } from 'react-native'

export const LittleLemonHeader = () => {
  return (
    <View
      style={{
        backgroundColor: '#EEEA08',
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 30,
          textTransform: 'capitalize',
        }}
      >
        welcome to{' '}
        <Text style={{ fontWeight: 'bold', color: '#E00CE7' }}>
          little lemon
        </Text>{' '}
      </Text>
    </View>
  )
}

// number of line

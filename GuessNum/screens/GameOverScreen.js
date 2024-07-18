import { View, Text, Image, Pressable } from 'react-native';
import Title from '../components/ui/Title';
export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  return (
    <View>
      <Title>game over</Title>
      <View
        style={{
          width: 400,
          height: 400,
          paddingHorizontal: 40,
          paddingVertical: 40,
        }}>
        <Image
          style={{ width: '100%', height: '100%', borderRadius: 200 }}
          source={{
            uri: 'https://images.pexels.com/photos/5326566/pexels-photo-5326566.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
          }}
        />
        <View style={{ paddingVertical: 80 }}>
          <Text style={{ textAlign: 'center', fontSize: 30 }}>
            your phone needed{' '}
            <Text style={{ color: 'red' }}>{roundsNumber}</Text> rounds to guess{' '}
            <Text style={{ color: 'red' }}>{userNumber}</Text> rounds
          </Text>
          <Pressable style={{ marginTop: 50 }} onPress={onStartNewGame}>
            <Text
              style={{
                textAlign: 'center',
                backgroundColor: 'orange',
                borderRadius: 40,
                paddingVertical: 20,
                paddingHorizontal: 30,
                textTransform: 'capitalize',
                fontSize: 23,
              }}>
              start new game
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

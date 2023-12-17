import React from 'react'
import { Text, View } from 'react-native'
import Header from './Header'
import Welcome from './Welcome'

import Footer from './Footer'

export default function App() {
  return (
    <View>
      <Header />
      <Welcome />

      <Footer />
    </View>
  )
}

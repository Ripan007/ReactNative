import React from 'react'
import { View, Text, SectionList } from 'react-native'

//  data
const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
]

// item component
const Item = ({ name, price }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{price}</Text>
    </View>
  )
}

// const header = () => <Text>little lemon</Text>
//  footer
const footer = () => (
  <Text
    style={{
      backgroundColor: '#df77',
      textAlign: 'center',
      paddingVertical: 10,
      textTransform: 'capitalize',
      color: '#fff',
    }}
  >
    all rights reserved little lemon , 2024{' '}
  </Text>
)
export default function TaskSectionlist() {
  const renderSectionHeader = ({ section: { title } }) => (
    <Text
      style={{
        backgroundColor: '#dfff',
        textAlign: 'center',
        paddingVertical: 10,
      }}
    >
      {title}
    </Text>
  )
  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />
  return (
    <View>
      <SectionList
        sections={menuItemsToDisplay}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ListFooterComponent={footer}
      ></SectionList>
    </View>
  )
}

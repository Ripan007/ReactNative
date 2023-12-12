import { View, Text, FlatList, StyleSheet, SectionList } from 'react-native'

/*const menuItemsToDisplay = [
  { name: 'Hummus', price: '$5.00', id: '1A' },
  { name: 'Moutabal', price: '$5.00', id: '2B' },
  { name: 'Falafel', price: '$7.50', id: '3C' },
  { name: 'Marinated Olives', price: '$5.00', id: '4D' },
  { name: 'Kofta', price: '$5.00', id: '5E' },
  { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
  { name: 'Lentil Burger', price: '$10.00', id: '7G' },
  { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
  { name: 'Kofta Burger', price: '$11.00', id: '9I' },
  { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
  { name: 'Fries', price: '$3.00', id: '11K' },
  { name: 'Buttered Rice', price: '$3.00', id: '12L' },
  { name: 'Bread Sticks', price: '$3.00', id: '13M' },
  { name: 'Pita Pocket', price: '$3.00', id: '14N' },
  { name: 'Lentil Soup', price: '$3.75', id: '15O' },
  { name: 'Greek Salad', price: '$6.00', id: '16Q' },
  { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
  { name: 'Baklava', price: '$3.00', id: '18S' },
  { name: 'Tartufo', price: '$3.00', id: '19T' },
  { name: 'Tiramisu', price: '$5.00', id: '20U' },
  { name: 'Panna Cotta', price: '$5.00', id: '21V' },
]*/

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      'Hummus',
      'Moutabal',
      'Falafel',
      'Marinated Olives',
      'Kofta',
      'Eggplant Salad',
    ],
  },
  {
    title: 'Main Dishes',
    data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
  },
  {
    title: 'Sides',
    data: [
      'Fries',
      'Buttered Rice',
      'Bread Sticks',
      'Pita Pocket',
      'Lentil Soup',
      'Greek Salad',
      'Rice Pilaf',
    ],
  },
  {
    title: 'Desserts',
    data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
  },
]

function Item({ name }) {
  return (
    <View style={menuItems.itemView}>
      <Text style={menuItems.itemText}>{name}</Text>
      {/* <Text style={menuItems.itemText}>{price}</Text> */}
    </View>
  )
}

const Footer = () => (
  <Text style={menuItems.Footer}>all rights reserved little lemon , 2024 </Text>
)

/*const Header = () => <Text style={menuItems.Header}>view menu </Text>
const Footer = () => (
  <Text style={menuItems.Footer}>all rights reserved little lemon , 2024 </Text>
  )
  */

const Seperator = () => <View style={menuItems.seperator}></View>

export default function MenuItemss() {
  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={menuItems.sectionHeader}>{title}</Text>
  )
  const renderItem = ({ item }) => <Item name={item} />
  return (
    <View>
      {/* <FlatList
        renderItem={renderItem}
        data={menuItemsToDisplay}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Seperator}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
      ></FlatList> */}

      <SectionList
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={renderSectionHeader}
        ListFooterComponent={Footer}
        ItemSeparatorComponent={Seperator}
      ></SectionList>
    </View>
  )
}

const menuItems = StyleSheet.create({
  itemView: {
    // backgroundColor: '#550e68',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 5,
    fontSize: 30,
  },
  itemText: {
    color: '#c9d613',
    fontSize: 20,
  },
  seperator: {
    borderBottomWidth: 1,
    borderColor: '#10cec5',
  },
  Header: {
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 30,
    color: '#fff',
  },
  Footer: {
    backgroundColor: '#c9d613',
    textAlign: 'center',
    paddingVertical: 10,
    color: '#000',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  sectionHeader: {
    backgroundColor: '#c9d613',
    textAlign: 'center',
    paddingVertical: 10,
  },
})

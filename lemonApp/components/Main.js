import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Main = () => {
    const menuItemsToDisplay = [
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
    ]
    const Item = ({ name, price }) => {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{name}</Text>
                <Text style={styles.itemText}>{price}</Text>
            </View>
        )
    }
    const renderData = ({ item }) => (
        <Item name={item.name} price={item.price} />
    )

    const Seperator = () => <View style={styles.seperator}></View>
    const Header = () => <Text style={styles.headerText}>view menu</Text>
    const Footer = () => <Text style={styles.footerText}>all rights reserved by little lemon , 2024</Text>
    return (
        <FlatList
            ItemSeparatorComponent={Seperator}
            ListFooterComponent={Footer}
            ListHeaderComponent={Header}
            data={menuItemsToDisplay}
            renderItem={renderData}
            keyExtractor={(item) => item.id}
        />
    )
}

export default Main

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 40,
    },
    itemText: {
        color: '#FAFFAF',
        fontSize: 23,
    },
    headerText: {
        fontSize: 40,
      fontWeight: '400',
      textAlign: 'left',
      color: '#fff',
        textAlign:'center'
    },
    footerText: {
      fontWeight: '500',
      textAlign:'center'
  },
  seperator: {
    borderBottomWidth: 1,
    borderColor:"#fff"
    }
})
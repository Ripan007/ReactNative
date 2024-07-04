import { FlatList, Text, View, StyleSheet } from 'react-native'

function MainContent() {
   const menuItemsToDisplay = [
       { name: 'Hummus', id: '1A' },
       { name: 'Moutabal', id: '2B' },
       { name: 'Falafel', id: '3C' },
       { name: 'Marinated Olives', id: '4D' },
       { name: 'Kofta', id: '5E' },
       { name: 'Eggplant Salad', id: '6F' },
       { name: 'Lentil Burger', id: '7G' },
       { name: 'Smoked Salmon', id: '8H' },
       { name: 'Kofta Burger', id: '9I' },
       { name: 'Turkish Kebab', id: '10J' },
       { name: 'Fries', id: '11K' },
       { name: 'Buttered Rice', id: '12L' },
       { name: 'Bread Sticks', id: '13M' },
       { name: 'Pita Pocket', id: '14N' },
       { name: 'Lentil Soup', id: '15O' },
       { name: 'Greek Salad', id: '16Q' },
       { name: 'Rice Pilaf', id: '17R' },
       { name: 'Baklava', id: '18S' },
       { name: 'Tartufo', id: '19T' },
       { name: 'Tartufo', id: '20U' },
       { name: 'Tiramisu', id: '21V' },
       { name: 'Panna Cotta', id: '22W' },
   ]

    const Item = ({ name }) => {
        return (
            <View style={styles.ItemContainer}>
                <Text style={styles.text}>{name}</Text>
            </View>
        )
    }

    const renderData = ({ item }) => <Item name={item.name} />
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.header}> view menu</Text>
            <FlatList
                alwaysBounceVertical={false}
                indicatorStyle="white"
                style={styles.flatChange}
                data={menuItemsToDisplay}
                renderItem={renderData}
            />
        </View>
    )
}
export default MainContent

const styles = StyleSheet.create({
    header: {
        fontSize: 42,
        textAlign: 'center',
    },
    mainContainer: {
        flex: 0.5,
    },
    ItemContainer: {
        paddingHorizontal: 20,
        paddingVertical: 2,
    },
    text: {
        fontSize: 33,
        color: 'red',
        textTransform: 'capitalize',
    },
    flatChange: {
        marginHorizontal: 30,
    },
})



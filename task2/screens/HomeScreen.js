import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import { useEffect, useState } from 'react';

export default function HomeScreen() {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=100&inc=name')
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, []);
    return (
        <View>
            <Text style={{ padding: 10, fontStyle: 'italic', fontWeight: 'bold' }}>List Of Users : </Text>
            {
                user ?
                    <View>
                        <FlatList
                            data={user.results}
                            renderItem={({ item }) => (
                                <Pressable onPress={() => {
                                    alert("Clicked Name")
                                }}>
                                    <View style={styles.list} >
                                        <Text>First Name : {item.name.first}</Text>
                                        <Text>Last Name : {item.name.last}</Text>
                                    </View>
                                </Pressable>
                            )}
                        />
                    </View>
                    : []
            }
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        borderWidth: 1,
        borderColor: 'blue',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'

    }
})
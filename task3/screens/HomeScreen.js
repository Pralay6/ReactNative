import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/home/homeSlice';
import { useEffect } from 'react';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <View>
      <Text style={{ padding: 10, fontStyle: 'italic', fontWeight: 'bold' }}>
        List Of Users :
      </Text>
      {user.users ? (
        <View>
          <FlatList
            data={user.users}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                  alert('Clicked Name');
                }}>
                <View style={styles.list}>
                  <Text>First Name : {item.name.first}</Text>
                  <Text>Last Name : {item.name.last}</Text>
                </View>
              </Pressable>
            )}
          />
        </View>
      ) : (
        []
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

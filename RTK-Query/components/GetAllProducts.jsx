import { FlatList, Text, View, StyleSheet } from "react-native";
import { useGetAllProductsQuery } from "../app/service/dummyData";

export default function GetAllProducts() {
  const { data, isError, isLoading } = useGetAllProductsQuery();

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>Failed to fetch data</Text>;

  const render = ({ item }) => (
    <View style={styles.flatlist}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {data ? (
        <FlatList
          data={data.products}
          keyExtractor={data.id}
          renderItem={render}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    margin: 10,
    padding: 16,
    borderColor: "black",
    borderWidth: 1,
  },
  container: {
    marginTop: 40,
  },
});

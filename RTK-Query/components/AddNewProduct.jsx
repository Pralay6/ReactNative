import { useAddNewProductMutation } from "../app/service/dummyData";
import { Text, View, StyleSheet, Button } from "react-native";

export default function AddNewProduct() {
  const [addNewProduct, { data, isError, isLoading }] =
    useAddNewProductMutation();

  if (isError) return <Text>Something went wrong.</Text>;
  if (isLoading) return <Text>Loading...</Text>;

  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: 1,
        title: "T-Shirt",
        description: "new arrived tshirt in the market",
      };
      await addNewProduct(newProductData);
    } catch (error) {
      console.error("failed adding a new product", error);
    }
  };

  return (
    <View>
      <View>
        <Text>{data?.id}</Text>
        <Text>{data?.title}</Text>
        <Text>{data?.description}</Text>
      </View>
      <Button
        title="Add New Product"
        style={styles.title}
        onPress={handleAddProduct}
        disabled={isLoading}
      />
    </View>
  );
}
const styles = StyleSheet.create({});

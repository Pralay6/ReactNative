import { Text, View, StyleSheet, Button } from "react-native";
import { useUpdateProductMutation } from "../app/service/dummyData";

export default function UpdateProduct({ productId }) {
  const [updateProduct, { data, error, isLoading }] =
    useUpdateProductMutation();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const handleUpdateProduct = async () => {
    try {
      const updatedProductData = {
        title: "title Updated",
      };
      await updateProduct({
        id: productId,
        updatedProduct: updatedProductData,
      });
    } catch (error) {
      console.error("failed updating the product", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data?.title}</Text>
      <Button
        title="update Product"
        onPress={handleUpdateProduct}
        disabled={isLoading}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});

import { View, Button, Text } from "react-native";
import { useDeleteProductMutation } from "../app/service/dummyData";

export default function DeleteProduct() {
  const [deleteProduct, { data, isLoading, error }] =
    useDeleteProductMutation();
  const handleDelete = () => {
    deleteProduct({ id: 1 });
  };
  return (
    <View>
      <Button title="Delete Product" onPress={handleDelete} />
      {data ? (
        <Text>
          {data.id} with title {data.title} is deleted successfully.
        </Text>
      ) : null}
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error: {error.message}</Text>}
    </View>
  );
}

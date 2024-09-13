import { StyleSheet, Text, View } from "react-native";
import { store } from "./app/store";
import { Provider } from "react-redux";
// import GetAllProducts from "./components/GetAllProducts";
// import AddNewProduct from "./components/AddNewProduct";
import UpdateProduct from "./components/UpdateProduct";
import DeleteProduct from "./components/DeleteProduct";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* <GetAllProducts /> */}
        {/* <AddNewProduct /> */}
        {/* <UpdateProduct productId={4} /> */}
        <DeleteProduct />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: "#fff",
  },
});

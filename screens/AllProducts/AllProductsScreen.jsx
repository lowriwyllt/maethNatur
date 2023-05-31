import { Text, View } from "react-native-web";
import { getAllProducts } from "../../database/database";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function AllProductsScreen({ navigation }) {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    getAllProducts().then((response) => {
      setAllProducts(response);
      console.log(response);
    });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Products</Text>
      {allProducts.map((product) => {
        return <ProductCard key={product.name} product={product} />;
      })}
    </View>
  );
}

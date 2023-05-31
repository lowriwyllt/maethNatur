import { Text, View } from "react-native-web";
import { getAllProducts } from "../../database/database";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Filters from "./Filters";

export default function AllProductsScreen({ navigation }) {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    type: undefined,
    plant: undefined,
    minPrice: 0,
    maxPrice: 20,
  });

  useEffect(() => {
    setIsLoading(true);
    getAllProducts(
      filters.type,
      filters.plant,
      filters.minPrice,
      filters.maxPrice
    )
      .then((response) => {
        setAllProducts(response.result);
        console.log(response);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [filters]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Filters filters={filters} setFilters={setFilters} />
      <Text>Products</Text>
      {isLoading ? <Text>Loading...</Text> : null}
      {allProducts.length === 0 && !isLoading ? (
        <Text>No products found try ajusting the filters</Text>
      ) : null}
      {allProducts.map((product) => {
        return <ProductCard key={product.name} product={product} />;
      })}
    </View>
  );
}

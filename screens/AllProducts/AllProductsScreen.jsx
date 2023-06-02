import { ScrollView, Text, View } from "react-native-web";
import { getAllProducts } from "../../database/database";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Filters from "./Filters";
import { useRoute } from "@react-navigation/core";
import { AllProductsStyling } from "../../Styling/AllProducts.Styling";

export default function AllProductsScreen({ navigation }) {
  const route = useRoute();
  const [allProducts, setAllProducts] = useState([]);
  const [allTypes, setAllTypes] = useState([]);
  const [allPlants, setAllPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    type: route.params?.type,
    plant: route.params?.plant,
    minPrice: route.params?.minPrice ? +route.params.minPrice : 0,
    maxPrice: route.params?.maxPrice ? +route.params.maxPrice : 20,
  });

  useEffect(() => {
    setIsLoading(true);
    getAllProducts(undefined, undefined, 0, 20)
      .then((response) => {
        setAllProducts(response.result);
        setAllPlants(response.resultsPlants);
        setAllTypes(response.types);
        console.log(response);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    console.log(filters);
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
    <View style={AllProductsStyling.page}>
      <Filters
        filters={filters}
        setFilters={setFilters}
        allTypes={allTypes}
        allPlants={allPlants}
      />
      <View style={AllProductsStyling.allProductsContainer}>
        {isLoading ? <Text>Loading...</Text> : null}
        {allProducts.length === 0 && !isLoading ? (
          <Text>No products found try ajusting the filters</Text>
        ) : null}
        {allProducts.map((product) => {
          return <ProductCard key={product.name} product={product} />;
        })}
      </View>
    </View>
  );
}

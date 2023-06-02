import { Image, StyleSheet, Text } from "react-native-web";
import { useRoute, useNavigation } from "@react-navigation/core";
import { getProductByName } from "../../database/database";
import { useEffect, useState, useLayoutEffect } from "react";
import { toPounds } from "../../utils/utilFunctions";

export default function SingleProductScreen() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const route = useRoute();
  const navigation = useNavigation();
  const productName = decodeURIComponent(route.params.query);

  useLayoutEffect(() => {
    navigation.setOptions({ title: productName });
  }, [navigation, productName]);

  useEffect(() => {
    setIsLoading(true);
    getProductByName(productName)
      .then((response) => {
        setProduct(response);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productName]);

  return (
    <>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Text>{product.name}</Text>
          {product.img?.map((image) => {
            return (
              <Image
                key={image}
                alt={`Image of ${product.name}`}
                source={image}
                style={styles.img}
              />
            );
          })}
          <Text>{product.description}</Text>
          <Text>{product.type}</Text>
          {product.plants?.map((plant) => {
            return <Text key={plant}>{plant}</Text>;
          })}
          <Text>{toPounds(product.price)}</Text>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 50,
    width: 50,
  },
});

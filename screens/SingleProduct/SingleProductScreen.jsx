import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native-web";
import { useRoute, useNavigation } from "@react-navigation/core";
import { getProductByName } from "../../database/database";
import { useEffect, useState, useLayoutEffect } from "react";
import { toPounds } from "../../utils/utilFunctions";
import { SingleProductStyling } from "../../Styling/SingleProduct.Styling";

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

  const handleEtsyPress = () => {
    window.open(product.etsy, "_blank");
  };

  return (
    <>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={SingleProductStyling.page}>
          <View style={SingleProductStyling.imgContainer}>
            {product.img?.map((image) => {
              return (
                <Image
                  key={image}
                  alt={`Image of ${product.name}`}
                  source={image}
                  style={SingleProductStyling.productImg}
                />
              );
            })}
          </View>
          <View style={SingleProductStyling.verticalMargin}>
            <Text>Description</Text>
            <Text>{product.description}</Text>
          </View>
          <View style={SingleProductStyling.verticalMargin}>
            <Text>Type: {product.type}</Text>
          </View>
          <View style={SingleProductStyling.verticalMargin}>
            <Text>Plants</Text>
            <FlatList
              data={product.plants}
              renderItem={({ item }) => <Text>- {item}</Text>}
            />
          </View>
          <View style={SingleProductStyling.verticalMargin}>
            <Text>{toPounds(product.price)}</Text>
          </View>

          <TouchableOpacity
            style={SingleProductStyling.etsyButton}
            onPress={() => {
              handleEtsyPress();
            }}
          >
            <Text>Buy from Etsy!</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

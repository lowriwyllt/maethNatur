import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native-web";
import { toPounds } from "../../utils/utilFunctions";
import { useNavigation } from "@react-navigation/native";
import { AllProductsStyling } from "../../Styling/AllProducts.Styling";

export default function ProductCard({ product }) {
  const navigation = useNavigation();

  const handleProductPress = () => {
    navigation.navigate("SingleProduct", { query: product.name });
  };

  console.log("img", product.img[0]);
  return (
    <TouchableOpacity onPress={handleProductPress}>
      <View style={AllProductsStyling.productCard}>
        <Text style={AllProductsStyling.title}>{product.name}</Text>
        <Image
          alt={`Image of ${product.name}`}
          source={product.img[0]}
          style={AllProductsStyling.productImg}
        />
        <Text>{toPounds(product.price)}</Text>
      </View>
    </TouchableOpacity>
  );
}

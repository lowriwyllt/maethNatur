import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native-web";
import { toPounds } from "../../utils/utilFunctions";
import { useNavigation } from "@react-navigation/native";

export default function ProductCard({ product }) {
  const navigation = useNavigation();

  const handleProductPress = () => {
    navigation.navigate("SingleProduct", { query: product.name });
  };

  console.log("img", product.img[0]);
  return (
    <TouchableOpacity onPress={handleProductPress}>
      <View style={styles.container}>
        <Text style={styles.name}>{product.name}</Text>
        <Image
          alt={`Image of ${product.name}`}
          source={product.img[0]}
          style={styles.img}
        />
        <Text>{toPounds(product.price)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 50,
    width: 50,
  },
  name: {
    textAlign: "center",
  },
});

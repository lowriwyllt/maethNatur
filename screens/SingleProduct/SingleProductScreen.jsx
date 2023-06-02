import { Text } from "react-native-web";
import { useRoute } from "@react-navigation/core";

export default function SingleProductScreen() {
  const route = useRoute();
  const productName = route.params.query;
  return <Text>{productName}</Text>;
}

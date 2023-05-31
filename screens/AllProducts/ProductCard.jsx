import { Image, StyleSheet, Text, View } from "react-native-web";

export default function ProductCard({ product }) {
  console.log("img", product.img[0]);
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Image
        alt={`Image of ${product.name}`}
        source={product.img[0]}
        style={styles.img}
      />
    </View>
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

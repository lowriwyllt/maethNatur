import { Linking, StyleSheet, Text, View } from "react-native-web";

const StockistCard = ({ stockist }) => {
  return (
    <View style={styles.container}>
      <Text>{stockist.name}</Text>
      <Text>{stockist.address}</Text>
      <Text
        onPress={() => Linking.openURL(`tel:${stockist.phone}`)}
        style={{ color: "blue" }}
      >
        {stockist.phone}
      </Text>
      <Text
        onPress={() => Linking.openURL(`mailto:${stockist.email}`)}
        style={{ color: "blue" }}
      >
        {stockist.email}
      </Text>
      <Text>{stockist.hours}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    margin: 20,
  },
});

export default StockistCard;

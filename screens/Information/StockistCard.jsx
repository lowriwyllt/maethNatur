import { Text, View } from "react-native-web";

const StockistCard = ({ stockist }) => {
  return (
    <View>
      <Text>{stockist.name}</Text>
      <Text>{stockist.address}</Text>
      <Text>{stockist.phone}</Text>
      <Text>{stockist.email}</Text>
      <Text>{stockist.hours}</Text>
    </View>
  );
};

export default StockistCard;

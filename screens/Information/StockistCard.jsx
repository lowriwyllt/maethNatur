import { Linking, StyleSheet, Text, View } from "react-native-web";
import { InformationStyling } from "../../Styling/Information.Styling";

const StockistCard = ({ stockist }) => {
  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={InformationStyling.title}>{stockist.name}</Text>
      <Text>{stockist.address}</Text>
      <Text
        onPress={() => Linking.openURL(`tel:${stockist.phone}`)}
        style={InformationStyling.link}
      >
        {stockist.phone}
      </Text>
      <Text
        onPress={() => Linking.openURL(`mailto:${stockist.email}`)}
        style={InformationStyling.link}
      >
        {stockist.email}
      </Text>
      <Text>{stockist.hours}</Text>
    </View>
  );
};

export default StockistCard;

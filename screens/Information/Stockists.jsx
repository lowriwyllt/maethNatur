import { Text, View } from "react-native-web";
import StockistCard from "./StockistCard";
import { getStockists } from "../../database/database";
import { useState, useEffect } from "react";
import { InformationStyling } from "../../Styling/Information.Styling";

const Stockists = () => {
  const [stockists, setStockists] = useState([]);
  useEffect(() => {
    getStockists().then((response) => {
      setStockists(response);
    });
  }, []);

  return (
    <View style={InformationStyling.section}>
      <Text style={InformationStyling.title}>Stockists</Text>
      <View>
        {stockists.map((stockist) => {
          return <StockistCard key={stockist.name} stockist={stockist} />;
        })}
      </View>
    </View>
  );
};

export default Stockists;

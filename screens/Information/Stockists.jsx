import { Text, View } from "react-native-web";
import StockistCard from "./StockistCard";
import { getStockists } from "../../database/database";
import { useState, useEffect } from "react";

const Stockists = () => {
  const [stockists, setStockists] = useState([]);
  useEffect(() => {
    getStockists().then((response) => {
      setStockists(response);
    });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Stockists</Text>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {stockists.map((stockist) => {
          return <StockistCard key={stockist.name} stockist={stockist} />;
        })}
      </View>
    </View>
  );
};

export default Stockists;

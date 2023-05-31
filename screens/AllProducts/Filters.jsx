import { Text, View } from "react-native-web";
import { toPounds } from "../../utils/utilFunctions";
import { useState } from "react";

export default function Filters({ filters, setFilters }) {
  const [sliderWarning, setSliderWarning] = useState("");
  const handleRangeChange = (event, index) => {
    const { value } = event.target;
    if (
      (index === "maxPrice" && +value > filters.minPrice) ||
      (index === "minPrice" && +value < filters.maxPrice)
    ) {
      const newValues = { ...filters };
      newValues[index] = +value;
      setFilters(newValues);
      setSliderWarning("");
    } else {
      setSliderWarning("Minimum price can't be larger than Maximum price");
    }
  };

  return (
    <View>
      <Text>Filters</Text>
      <Text>Pricing</Text>
      <View>
        <Text>Minimum price: {toPounds(filters.minPrice)}</Text>
        <input
          type="range"
          min={0}
          max={20}
          step={0.5}
          value={filters.minPrice}
          onChange={(event) => handleRangeChange(event, "minPrice")}
        />
      </View>
      <View>
        <Text>Maximum price: {toPounds(filters.maxPrice)}</Text>
        <input
          type="range"
          min={0}
          max={20}
          step={0.5}
          value={filters.maxPrice}
          onChange={(event) => handleRangeChange(event, "maxPrice")}
        />
      </View>
      {sliderWarning ? <Text>{sliderWarning}</Text> : null}
    </View>
  );
}

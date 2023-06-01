import { Text, TextInput, View } from "react-native-web";
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

  const fillPercentage = ((filters.maxPrice - filters.minPrice) / 20) * 100;
  const fillOffset = (filters.minPrice / 20) * 100;

  return (
    <View style={{ width: "10%", padding: 10 }}>
      <View style={{ marginVertical: 20 }}>
        <Text style={{ fontWeight: "bold" }}>Pricing</Text>
        <View>
          <Text>Minimum price: {toPounds(filters.minPrice)}</Text>
          <input
            type="range"
            min={0}
            max={20}
            step={0.5}
            value={filters.minPrice}
            onChange={(event) => handleRangeChange(event, "minPrice")}
            style={{
              WebkitAppearance: "none",
              width: "100%",
              height: 10,
              borderRadius: 5,
              background: `linear-gradient(to right, white 0%, white ${fillOffset}%, green ${fillOffset}%, green ${
                fillOffset + fillPercentage
              }%, white ${fillOffset + fillPercentage}%, white 100%)`,
              outline: "none",
            }}
          />
          <TextInput
            style={{ width: "100%" }}
            keyboardType="numeric"
            value={String(filters.minPrice)}
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
            style={{
              WebkitAppearance: "none",
              width: "100%",
              height: 10,
              borderRadius: 5,
              background: `linear-gradient(to right, white 0%, white ${fillOffset}%, green ${fillOffset}%, green ${
                fillOffset + fillPercentage
              }%, white ${fillOffset + fillPercentage}%, white 100%)`,
              outline: "none",
            }}
          />
          <TextInput
            style={{ width: "100%" }}
            keyboardType="numeric"
            value={String(filters.maxPrice)}
            onChange={(event) => handleRangeChange(event, "maxPrice")}
          />
        </View>
        {sliderWarning ? <Text>{sliderWarning}</Text> : null}

        <style>
          {`
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            background-color: black;
            border-radius: 50%;
            cursor: pointer;
          }
        `}
        </style>
      </View>
    </View>
  );
}

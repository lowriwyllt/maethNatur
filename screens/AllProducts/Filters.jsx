import { Text, TextInput, View } from "react-native-web";
import { toPounds } from "../../utils/utilFunctions";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { AllProductsStyling } from "../../Styling/AllProducts.Styling";
import { theme } from "../../Styling/theme";

export default function Filters({ filters, setFilters, allTypes, allPlants }) {
  const [sliderWarning, setSliderWarning] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const { type, plant, minPrice, maxPrice } = filters;
    const params = {
      type: type || undefined,
      plant: plant || undefined,
      minPrice: minPrice !== 0 ? String(minPrice) : undefined,
      maxPrice: maxPrice !== 20 ? String(maxPrice) : undefined,
    };

    navigation.setParams(params);
  }, [filters]);

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

  const handleTypeChange = (event) => {
    console.log(event);
    const newValues = { ...filters };
    newValues["type"] = event.target.value;
    setFilters(newValues);
  };

  const handlePlantChange = (event) => {
    console.log(event);
    const newValues = { ...filters };
    newValues["plant"] = event.target.value;
    setFilters(newValues);
  };

  const fillPercentage = ((filters.maxPrice - filters.minPrice) / 20) * 100;
  const fillOffset = (filters.minPrice / 20) * 100;

  console.log(filters);

  return (
    <View style={AllProductsStyling.filterContainer}>
      <View>
        <Text style={AllProductsStyling.title}>Pricing</Text>
        <View>
          <Text>
            Minimum price: £
            <TextInput
              keyboardType="numeric"
              value={parseFloat(filters.minPrice).toFixed(2)}
              onChange={(event) => handleRangeChange(event, "minPrice")}
            />
          </Text>
          <View style={AllProductsStyling.smallVerticalMargin}>
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
                background: `linear-gradient(to right, white 0%, white ${fillOffset}%, ${
                  theme.brightGreen
                } ${fillOffset}%, ${theme.brightGreen} ${
                  fillOffset + fillPercentage
                }%, white ${fillOffset + fillPercentage}%, white 100%)`,
                outline: "none",
              }}
            />
          </View>
        </View>
        <View>
          <Text>
            Maximum price: £
            <TextInput
              keyboardType="numeric"
              value={parseFloat(filters.maxPrice).toFixed(2)}
              onChange={(event) => handleRangeChange(event, "maxPrice")}
            />
          </Text>
          <View style={AllProductsStyling.smallVerticalMargin}>
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
                background: `linear-gradient(to right, white 0%, white ${fillOffset}%, ${
                  theme.brightGreen
                } ${fillOffset}%, ${theme.brightGreen} ${
                  fillOffset + fillPercentage
                }%, white ${fillOffset + fillPercentage}%, white 100%)`,
                outline: "none",
              }}
            />
          </View>
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
      <View style={AllProductsStyling.section}>
        <Text style={AllProductsStyling.title}>Type</Text>
        <label>
          <input
            type="radio"
            value={undefined}
            checked={filters.type === undefined || filters.type === ""}
            onChange={handleTypeChange}
          />
          All
        </label>
        {allTypes.map((type) => {
          return (
            <label key={type}>
              <input
                type="radio"
                value={type}
                checked={filters.type === type}
                onChange={handleTypeChange}
              />
              {type}
            </label>
          );
        })}
      </View>
      <View style={AllProductsStyling.section}>
        <Text style={AllProductsStyling.title}>Plants</Text>
        <label>
          <input
            type="radio"
            value={undefined}
            checked={filters.plant === undefined || filters.plant === ""}
            onChange={handlePlantChange}
          />
          All
        </label>
        {allPlants.map((plant) => {
          return (
            <label key={plant}>
              <input
                type="radio"
                value={plant}
                checked={filters.plant === plant}
                onChange={handlePlantChange}
              />
              {plant}
            </label>
          );
        })}
      </View>
    </View>
  );
}

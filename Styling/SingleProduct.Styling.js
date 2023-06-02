import { StyleSheet } from "react-native-web";
import { theme } from "./theme";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const SingleProductStyling = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: theme.lightGreen,
    minHeight: windowHeight,
  },
  productImg: {
    height: windowWidth * 0.25,
    width: windowWidth * 0.25,
  },
  imgContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    flexWrap: "wrap",
    marginVertical: 10,
  },
  verticalMargin: {
    marginVertical: 10,
  },
  etsyButton: {
    backgroundColor: theme.orange,
    padding: 12,
    alignSelf: "center",
    borderRadius: 20,
  },
});

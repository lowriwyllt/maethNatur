import { StyleSheet } from "react-native-web";
import { theme } from "./theme";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const AllProductsStyling = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: theme.lightGreen,
  },
  filterContainer: {},
  section: {
    marginVertical: 20,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  smallVerticalMargin: {
    marginVertical: 10,
  },
  allProductsContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  productCard: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.cream,
    borderRadius: "15%",
  },
  productImg: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    borderRadius: 10,
  },
});

//for web { flex: 1, flexDirection: "row" }, filterContainer: { width: "10%", padding: 10 }

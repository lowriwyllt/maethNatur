import { StyleSheet } from "react-native-web";
import { theme } from "./theme";
import { Dimensions } from "react-native";

let ScreenHeight = Dimensions.get("window").height;

export const InformationStyling = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: theme.lightGreen,
  },
  section: {
    display: "flex",
    alignItems: "center",
    marginVertical: 20,
  },
  link: {
    color: theme.orange,
  },
  title: {
    fontWeight: "bold",
  },
  socialMedia: {
    margin: 10,
    display: "flex",
    flexDirection: "row",
  },
  socialMediaIcon: {
    width: 50,
    height: 50,
    margin: 10,
  },
});

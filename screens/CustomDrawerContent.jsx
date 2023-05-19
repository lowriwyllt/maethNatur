import { DrawerItemList } from "@react-navigation/drawer";
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native-web";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

export default function CustomDrawerContent(props) {
  const handleImgOnClick = (screenName) => {
    props.navigation.navigate(screenName);
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={() => null}
        onPress={() => handleImgOnClick("Home")}
        icon={() => (
          <TouchableOpacity onPress={() => handleImgOnClick("Home")}>
            <Image
              source={require("../assets/navbarItem.png")}
              style={styles.leaf}
            />
            <Text style={styles.leafText}>Home</Text>
          </TouchableOpacity>
        )}
      ></DrawerItem>
      <DrawerItem
        label={() => null}
        onPress={() => handleImgOnClick("Products")}
        icon={() => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleImgOnClick("Products")}
          >
            <Image
              source={require("../assets/navbarItem.png")}
              style={styles.leaf}
            />
            <Text style={styles.leafText}>Products</Text>
          </TouchableOpacity>
        )}
      ></DrawerItem>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  leaf: {
    width: 300,
    height: 150,
    position: "relative",
    left: -30,
  },
  leafText: {
    position: "relative",
    top: -140,
    left: 80,
    fontSize: 30,
    color: "white",
    transform: [{ rotate: "340deg" }],
  },
  button: {
    marginBottom: -20,
    marginTop: -20,
  },
  signOutButtonContainer: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    alignSelf: "center",
  },
  signOutButton: {
    color: "white",
    fontWeight: "700",
    textAlign: "center",
  },
  container: {
    flex: 1,
  },
});

import { StyleSheet, Text, TouchableOpacity, View } from "react-native-web";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import LeafView from "./LeafView";

export default function CustomDrawerContent(props) {
  const handleImgOnClick = (screenName) => {
    props.navigation.navigate(screenName);
  };

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <DrawerItem
        style={styles.drawerItem}
        label={() => null}
        onPress={() => handleImgOnClick("Home")}
        icon={() => (
          <LeafView
            style={styles.leaf}
            page="Home"
            handleImgOnClick={handleImgOnClick}
          />
        )}
      ></DrawerItem>
      <DrawerItem
        style={styles.drawerItem}
        label={() => null}
        onPress={() => handleImgOnClick("Products")}
        icon={() => (
          <LeafView
            style={styles.leaf}
            page="Products"
            handleImgOnClick={handleImgOnClick}
          />
        )}
      ></DrawerItem>
      <DrawerItem
        style={styles.drawerItem}
        label={() => null}
        onPress={() => handleImgOnClick("Information")}
        icon={() => (
          <LeafView
            style={styles.leaf}
            page="Information"
            handleImgOnClick={handleImgOnClick}
          />
        )}
      ></DrawerItem>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerItem: {
    height: 150,
  },
  container: {
    marginTop: 50,
    position: "relative",
    left: -30,
  },
  leafText: {
    position: "relative",
    top: -320,
    left: 80,
    fontSize: 30,
    color: "black",
    transform: [{ rotate: "340deg" }],
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
});

import "react-native-gesture-handler";
import * as Linking from "expo-linking";
import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import AllProductsScreen from "./screens/AllProductsScreen";
import CustomDrawerContent from "./screens/CustomDrawerContent";

const prefix = Linking.createURL("/");

const Drawer = createDrawerNavigator();

export default function App() {
  const linking = {
    prefixes: [prefix],
  };

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          overlayColor: "transparent",
          drawerStyle: {
            backgroundColor: "transparent",
          },
        }}
        drawerCon
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          inactiveBackgroundColor="white"
        />
        <Drawer.Screen
          name="Products"
          component={AllProductsScreen}
          inactiveBackgroundColor="white"
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

import "react-native-gesture-handler";
import * as Linking from "expo-linking";
import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/Home/HomeScreen";
import AllProductsScreen from "./screens/AllProducts/AllProductsScreen";
import CustomDrawerContent from "./screens/Navbar/CustomDrawerContent";
import InformationScreen from "./screens/Information/InformationScreen";

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
        <Drawer.Screen
          name="Information"
          component={InformationScreen}
          inactiveBackgroundColor="white"
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

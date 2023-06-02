import * as Linking from "expo-linking";
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native"; // Import Text component

import HomeScreen from "./screens/Home/HomeScreen";
import AllProductsScreen from "./screens/AllProducts/AllProductsScreen";
import CustomDrawerContent from "./screens/Navbar/CustomDrawerContent";
import InformationScreen from "./screens/Information/InformationScreen";
import SingleProductScreen from "./screens/SingleProduct/SingleProductScreen";

const prefix = Linking.createURL("/");

const Drawer = createDrawerNavigator();

export default function App() {
  const [initialUrl, setInitialUrl] = React.useState(null);

  React.useEffect(() => {
    // Retrieve the initial URL when the app starts
    const getInitialUrl = async () => {
      const url = await Linking.getInitialURL();
      setInitialUrl(url);
    };

    getInitialUrl();

    // Add a listener to handle deep linking when the app is already open
    const handleUrl = (event) => {
      setInitialUrl(event.url);
    };

    Linking.addEventListener("url", handleUrl);

    return () => {
      Linking.removeEventListener("url", handleUrl);
    };
  }, []);

  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Home: {
          path: "home",
        },
        Products: {
          path: "products",
        },
        Information: {
          path: "information",
        },
        SingleProduct: {
          path: "products/:query",
        },
      },
    },
    getQueryParams: (url) => {
      const params = Linking.parse(url).queryParams;
      return params;
    },
  };

  const queryParamFromUrl = initialUrl
    ? linking.getQueryParams(initialUrl)
    : null;

  console.log("INITIAL", queryParamFromUrl);

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
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={() => <HomeScreen />}
          inactiveBackgroundColor="white"
        />
        <Drawer.Screen
          name="Products"
          component={() => (
            <AllProductsScreen queryParams={queryParamFromUrl} />
          )}
          inactiveBackgroundColor="white"
        />
        <Drawer.Screen
          name="Information"
          component={() => <InformationScreen />}
          inactiveBackgroundColor="white"
        />
        <Drawer.Screen
          name="SingleProduct"
          component={() => (
            <SingleProductScreen query={queryParamFromUrl?.query} />
          )}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

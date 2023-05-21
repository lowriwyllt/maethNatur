import { Text, View, Linking } from "react-native-web";

export default function InformationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontWeight: "bold" }}>Contact Information</Text>
      <Text>Location: Blaenau Ffestiniog</Text>
      <Text>
        Email:{" "}
        <Text
          onPress={() => Linking.openURL("mailto:maethnatur@outlook.com")}
          style={{ color: "blue" }}
        >
          maethnatur@outlook.com
        </Text>
      </Text>
      <Text>
        Etsy:
        <Text
          onPress={() =>
            Linking.openURL("https://www.etsy.com/uk/shop/MaethNaturNurtures")
          }
          style={{ color: "blue" }}
        >
          https://www.etsy.com/uk/shop/MaethNaturNurtures
        </Text>
      </Text>
      <Text>
        Facebook:
        <Text
          onPress={() =>
            Linking.openURL(
              "https://www.facebook.com/profile.php?id=100057617164128"
            )
          }
          style={{ color: "blue" }}
        >
          https://www.facebook.com/profile.php?id=100057617164128
        </Text>
      </Text>
      <Text>
        Instagram:{" "}
        <Text
          onPress={() =>
            Linking.openURL("https://www.instagram.com/maethnatur/")
          }
          style={{ color: "blue" }}
        >
          https://www.instagram.com/maethnatur/
        </Text>
      </Text>
    </View>
  );
}

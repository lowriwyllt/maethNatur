import { Text, View, Linking, Image, TouchableOpacity } from "react-native-web";
import Stockists from "./Stockists";

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
      <Text style={{ fontWeight: "bold" }}>Come follow my socials!</Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.etsy.com/uk/shop/MaethNaturNurtures")
          }
        >
          <Image
            style={{ width: 50, height: 50, margin: 5 }}
            alt="Etsy icon"
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/maeth-natur.appspot.com/o/Socials%2Fetsy-png-logo.png?alt=media&token=76afde28-dd4e-4249-9678-d1ad445a0598",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://www.facebook.com/profile.php?id=100057617164128"
            )
          }
        >
          <Image
            style={{ width: 50, height: 50, margin: 5 }}
            alt="Facebook icon"
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/maeth-natur.appspot.com/o/Socials%2Ff_logo_RGB-Blue_100.png?alt=media&token=d7acf951-54fe-4b99-b25a-b205fff25c97",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.instagram.com/maethnatur/")
          }
        >
          <Image
            style={{ width: 50, height: 50, margin: 5 }}
            alt="Instagram icon"
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/maeth-natur.appspot.com/o/Socials%2FInstagram_Glyph_Gradient%20copy.png?alt=media&token=ad61cbea-f8a1-469d-b155-42d78cce2834",
            }}
          />
        </TouchableOpacity>
      </View>
      <Stockists />
    </View>
  );
}

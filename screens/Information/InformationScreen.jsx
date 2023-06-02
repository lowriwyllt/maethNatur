import {
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native-web";
import Stockists from "./Stockists";
import { InformationStyling } from "../../Styling/Information.Styling";

export default function InformationScreen({ navigation }) {
  return (
    <ScrollView style={InformationStyling.page}>
      <View style={InformationStyling.section}>
        <View style={InformationStyling.bottomMargin}>
          <Text>Location: Blaenau Ffestiniog</Text>
          <Text>
            Email:
            <Text
              onPress={() => Linking.openURL("mailto:maethnatur@outlook.com")}
              style={InformationStyling.link}
            >
              maethnatur@outlook.com
            </Text>
          </Text>
        </View>
        <Text style={InformationStyling.title}>Come follow my socials!</Text>
        <View style={InformationStyling.socialMedia}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.etsy.com/uk/shop/MaethNaturNurtures")
            }
          >
            <Image
              style={InformationStyling.socialMediaIcon}
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
              style={InformationStyling.socialMediaIcon}
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
              style={InformationStyling.socialMediaIcon}
              alt="Instagram icon"
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/maeth-natur.appspot.com/o/Socials%2FInstagram_Glyph_Gradient%20copy.png?alt=media&token=ad61cbea-f8a1-469d-b155-42d78cce2834",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Stockists />
    </ScrollView>
  );
}

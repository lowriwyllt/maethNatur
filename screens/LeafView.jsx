import { Link } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { StyleSheet, Text, TouchableOpacity } from "react-native-web";

const LeafView = ({ page, handleImgOnClick }) => {
  return (
    <View style={{ flex: 1, width: 300, height: 300 }}>
      <TouchableOpacity onPress={() => handleImgOnClick(page)}>
        <Svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          preserveAspectRatio="none"
        >
          <Path
            d="M0,105 Q2,107 4,106 C20,88 39,75 56,70 C68,68, 80,68 98,69 C126,65 149,53 176,34 C186,27 200,19 205,17 Q207,13 204,10 C156,0 116,8 92,18 C68,32 47,52 29,73 C21,81 6,96 0,105"
            width="300"
            height="300"
            fill="#586b5e"
            strokeWidth="1"
          />
        </Svg>
      </TouchableOpacity>
      <Text style={styles.leafText}>{page}</Text>
    </View>
  );
};

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
    top: -280,
    left: 80,
    fontSize: 20,
    color: "black",
    transform: [{ rotate: "340deg" }],
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default LeafView;

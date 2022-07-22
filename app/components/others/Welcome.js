import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "./Screen";
import SearchField from "../Search/SearchField";
import SPACING from "../../config/constants";
import colors from "../../config/colors";
import { useNavigation } from "@react-navigation/native";

const IMAGE_HEIGH = 230;
const Welcome = () => {
  const handleTextChange = (value) => {
    console.log(value);
  };
  return (
    <ImageBackground
      source={require("../../assets/images/bg.jpg")}
      style={styles.imageContainer}
      imageStyle={styles.image}
    >
      <Screen style={styles.welcomeContainer}>
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeTitle}>The Rick and Morty</Text>
          <Text style={styles.welcomeSubTitle}>
            Discover your favorites characters
          </Text>
        </View>
        <SearchField onChangeText={handleTextChange} />
      </Screen>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  imageContainer: {
    height: IMAGE_HEIGH,
    width: "100%",
  },
  image: {
    borderBottomLeftRadius: SPACING * 2,
    borderBottomRightRadius: SPACING * 2,
  },
  welcomeContainer: {
    paddingVertical: SPACING * 2,
    paddingHorizontal: SPACING,
    justifyContent: "flex-end",
    height: "100%",
  },
  welcomeTextContainer: {
    marginBottom: SPACING,
  },
  welcomeTitle: {
    fontSize: SPACING * 2.5,
    color: colors.white,
    fontWeight: "bold",
    marginBottom: SPACING / 3,
  },
  welcomeSubTitle: {
    fontSize: SPACING * 1.4,
    color: colors.lightGray,
    fontWeight: "500",
  },
});

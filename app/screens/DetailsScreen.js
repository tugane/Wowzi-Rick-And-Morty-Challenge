import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import SPACING from "../config/constants";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
const { height } = Dimensions.get("window");

const DetailsScreen = ({ route }) => {
  const character = route.params.character;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: character.image }} />
      <View style={styles.detailContainer}>
        <Text style={[styles.title, styles.species]}>{character.species}</Text>
        <Text style={[styles.title, styles.name]} numberOfLines={2}>
          {character.name}
        </Text>
        <View style={styles.locationTitleWrap}>
          <Ionicons
            name="location-outline"
            size={SPACING * 2}
            color={colors.gray}
          />
          <Text style={[styles.subTitle, styles.locationTitle]}>
            Last known location
          </Text>
        </View>
        <Text style={[styles.title, styles.location]}>
          {character.location.name}
        </Text>
        <View style={styles.moreInfo}>
          <View style={styles.infoWrap}>
            <Text style={[styles.title, styles.moreInfoTitle]}>
              {character.gender}
            </Text>
            <Text style={styles.shortSubTitle}>/gender</Text>
          </View>
          <View style={styles.infoWrap}>
            <Text style={[styles.title, styles.moreInfoTitle]}>
              {character.episode.length}
            </Text>
            <Text style={styles.shortSubTitle}>
              {`/episode${character.episode.length > 1 ? `s` : ``}`}
            </Text>
          </View>
          <View style={styles.infoWrap}>
            <Text style={[styles.title, styles.moreInfoTitle]}>
              {character.status}
            </Text>
            <Text style={styles.shortSubTitle}>/status</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    padding: SPACING,
  },
  image: {
    height: height / 2,
    borderRadius: SPACING * 2,
  },
  detailContainer: {
    marginVertical: SPACING * 2,
  },
  title: {
    fontSize: SPACING * 2,
    fontWeight: "bold",
    color: colors.dark,
    textTransform: "capitalize",
    marginBottom: SPACING,
  },
  species: {
    fontWeight: "600",
  },
  name: {
    fontSize: SPACING * 2.5,
    textTransform: "uppercase",
    marginBottom: SPACING / 2,
  },
  subTitle: {
    fontSize: SPACING * 1.7,
    fontWeight: "600",
    color: colors.gray,
    textTransform: "capitalize",
    marginBottom: SPACING,
  },
  locationTitleWrap: {
    flexDirection: "row",
    alignItems: "center",
  },

  locationTitle: {
    marginTop: SPACING,
    textTransform: "none",
  },
  location: {
    fontSize: SPACING * 1.7,
  },
  moreInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  moreInfoTitle: {
    fontSize: SPACING * 1.5,
  },
  infoWrap: {
    padding: SPACING,
    borderRadius: SPACING,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  shortSubTitle: {
    fontSize: SPACING * 1.3,
    fontWeight: "500",
    color: colors.gray,
    textTransform: "capitalize",
    marginBottom: SPACING,
  },
});

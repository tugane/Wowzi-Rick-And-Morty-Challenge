import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import SPACING from "../config/constants";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
const { height, width } = Dimensions.get("window");
import { SharedElement } from "react-navigation-shared-element";

const DetailsScreen = ({ route }) => {
  const character = route.params.character;
  return (
    <View style={styles.container}>
      <SharedElement id={`character.${character.id}.photo`}>
        <Image style={styles.image} source={{ uri: character.image }} />
      </SharedElement>
      <View style={styles.detailContainer}>
        <Text style={[styles.title, styles.name]}>{character.species}</Text>
        <View style={styles.locationTitleWrap}>
          <View>
            <Ionicons
              name="location-outline"
              size={SPACING * 2}
              color={colors.gray}
            />
          </View>
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
            <Text style={styles.shortSubTitle}>gender</Text>
          </View>
          <View style={[styles.infoWrap, { marginHorizontal: SPACING }]}>
            <Text style={[styles.title, styles.moreInfoTitle]}>
              {character.episode.length}
            </Text>
            <Text style={styles.shortSubTitle}>
              {`episode${character.episode.length > 1 ? `s` : ``}`}
            </Text>
          </View>
          <View style={styles.infoWrap}>
            <View style={styles.statusWrap}>
              <View
                style={[
                  styles.status,
                  character.status.toLowerCase() === "alive"
                    ? { backgroundColor: colors.success }
                    : character.status.toLowerCase() === "dead"
                    ? { backgroundColor: colors.danger }
                    : { backgroundColor: colors.gray },
                ]}
              />
              <Text style={[styles.title, styles.moreInfoTitle]}>
                {character.status}
              </Text>
            </View>
            <Text style={styles.shortSubTitle}>status</Text>
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
    shadowRadius: 10,
    shadowColor: colors.dark,
    shadowOffset: { width: 10, height: 10 },
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
    color: colors.dark,
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
    fontSize: SPACING * 2,
    marginLeft: SPACING / 2,
  },
  moreInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    flexWrap: "wrap",
  },
  statusWrap: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  status: {
    height: SPACING * 1.5,
    width: SPACING * 1.5,
    borderRadius: SPACING,
    marginTop: SPACING / 2,
    marginRight: SPACING,
  },
  moreInfoTitle: {
    fontSize: SPACING * 1.7,
  },
  infoWrap: {
    width: width / 3 - SPACING * 2,
    padding: SPACING,
    borderRadius: SPACING,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  shortSubTitle: {
    fontSize: SPACING * 1.6,
    fontWeight: "500",
    color: colors.gray,
    textTransform: "capitalize",
  },
});

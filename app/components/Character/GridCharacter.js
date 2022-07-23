import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import SPACING from "../../config/constants";
import colors from "../../config/colors";
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";
import Animated, {
  FadeInUp,
  FadeOutDown,
  Layout,
} from "react-native-reanimated";

const ITEM_WIDTH = 180;

const GridCharacter = ({ character, index }) => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.push("details", { character });
  };
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <Animated.View
        entering={FadeInUp.springify().delay(SPACING * 3 * index)}
        exiting={FadeOutDown.springify().delay(SPACING * 3 * index)}
        layout={Layout.delay(200)}
        style={styles.container}
      >
        <SharedElement id={`character.${character.id}.photo`}>
          <Image style={styles.image} source={{ uri: character.image }} />
        </SharedElement>
        <View style={styles.detailsWrap}>
          <Text style={styles.species}>{character.species}</Text>
          <View style={styles.locationWrap}>
            <Ionicons
              name="location-outline"
              size={SPACING * 2}
              color={colors.gray}
            />
            <Text style={styles.location}>{character.location.name}</Text>
          </View>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default GridCharacter;

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    backgroundColor: colors.white,
    marginBottom: SPACING,
    borderRadius: SPACING * 1.5,
    padding: SPACING,
  },
  image: {
    width: ITEM_WIDTH - SPACING * 2,
    height: ITEM_WIDTH - SPACING * 2,
    borderRadius: SPACING * 1.5,
  },
  detailsWrap: {
    marginTop: SPACING,
  },
  species: {
    fontSize: SPACING * 1.5,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  locationWrap: {
    flexDirection: "row",
    marginTop: SPACING,
    alignItems: "center",
  },
  location: {
    color: colors.gray,
    fontSize: SPACING * 1.3,
    fontWeight: "500",
  },
});

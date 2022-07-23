import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";
import GridCharacter from "./GridCharacter";
import SPACING from "../../config/constants";
import AlertMessage from "../Alerts/AlertMessage";
import colors from "../../config/colors";

const CharactersGridList = ({
  characters = [],
  loading = false,
  loadingMore = false,
}) => {
  return (
    <>
      {loading && <ActivityIndicator size="small" color={colors.dark} />}
      {characters.length === 0 && <AlertMessage message="Not Found!" />}
      <View style={styles.container}>
        {characters.map((character, index) => (
          <GridCharacter
            key={character.id}
            index={index}
            character={character}
          />
        ))}
      </View>
      {loadingMore && <ActivityIndicator size="small" color={colors.dark} />}
    </>
  );
};

export default CharactersGridList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: SPACING,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    flex: 1,
  },
});

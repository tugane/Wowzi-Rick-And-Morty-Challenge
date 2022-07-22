import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Welcome from "../components/others/Welcome";
import SectionHeader from "../components/others/SectionHeader";
import SPACING from "../config/constants";
import CharactersGridList from "../components/Character/CharactersGridList";
import colors from "../config/colors";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Welcome />
      <View style={styles.mainWrapper}>
        <SectionHeader title="Characters" />
        <CharactersGridList />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
  mainWrapper: {
    padding: SPACING,
  },
});

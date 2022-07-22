import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SPACING from "../../config/constants";
import colors from "../../config/colors";

const SectionHeader = ({ title, style, titleStyle }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: SPACING,
  },
  title: {
    fontSize: SPACING * 2,
    color: colors.dark,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});

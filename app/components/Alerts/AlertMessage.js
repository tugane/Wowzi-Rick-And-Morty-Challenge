import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SPACING from "../../config/constants";
import colors from "../../config/colors";

const AlertMessage = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default AlertMessage;

const styles = StyleSheet.create({
  container: {
    padding: SPACING * 2,
    backgroundColor: colors.warning,
    borderRadius: SPACING * 2,
  },
  text: {
    color: colors.dark,
    fontSize: SPACING * 1.6,
    fontWeight: "500",
  },
});

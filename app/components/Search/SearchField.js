import { Platform, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import SPACING from "../../config/constants";
import colors from "../../config/colors";

const SearchField = ({ onChangeText, onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="search" size={SPACING * 2.5} color={colors.lightGray} />
      </View>
      <TextInput
        style={styles.input}
        placeholderTextColor={colors.lightGray}
        placeholder="search by name..."
        autoCapitalize="none"
        clearButtonMode="while-editing"
        onSubmitEditing={(e) => onSubmit && onSubmit(e.nativeEvent.text)}
        dataDetectorTypes={"none"}
        keyboardType="web-search"
        onChangeText={onChangeText}
        autoCorrect={false}
      />
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  container: {
    padding: SPACING,
    width: "100%",
    backgroundColor: colors.dark,
    borderRadius: SPACING * 1.5,
    justifyContent: "center",
  },
  iconContainer: {
    position: "absolute",
    left: SPACING,
  },
  input: {
    padding: Platform.OS === "ios" ? SPACING / 1.2 : SPACING / 4,
    fontSize: SPACING * 1.5,
    color: colors.lightGray,
    paddingLeft: SPACING * 3,
  },
});

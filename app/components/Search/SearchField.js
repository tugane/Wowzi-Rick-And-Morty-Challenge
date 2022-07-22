import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import SPACING from "../../config/constants";
import colors from "../../config/colors";

const SearchField = ({ onBlur, onChange }) => {
  const [value, setValue] = useState("");
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
        dataDetectorTypes={"none"}
        keyboardType="web-search"
        value={value}
        onChangeText={(text) => {
          setValue(text);
        }}
        onBlur={onBlur}
        onChange={onChange}
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
    padding: SPACING / 1.2,
    fontSize: SPACING * 1.5,
    color: colors.lightGray,
    paddingLeft: SPACING * 3,
  },
});

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import SPACING from "../../config/constants";

const Button = ({
  iconName,
  iconSize,
  iconColor,
  text,
  style,
  iconContainerStyle,
  textStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <View style={[styles.iconContainer, iconContainerStyle]}>
          <Ionicons name={iconName} size={iconSize} color={iconColor} />
        </View>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: SPACING / 2,
  },
  iconContainer: {
    alignSelf: "center",
  },
  text: {},
});

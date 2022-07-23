import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import colors from "../../config/colors";

const ScreenLoading = () => {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        source={require("../../assets/animations/loader.json")}
        loop
      />
    </View>
  );
};

export default ScreenLoading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

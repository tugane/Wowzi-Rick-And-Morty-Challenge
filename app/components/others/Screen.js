import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Screen = ({ style, children }) => {
  return (
    <SafeAreaView>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({});

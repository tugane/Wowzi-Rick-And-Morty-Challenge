import { StyleSheet } from "react-native";
import React from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import colors from "../config/colors";

const whiteColors = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: colors.dark,
    light: colors.light,
    white: colors.white,
    border: colors.transparent,
    background: colors.light,
    primary: colors.dark,
    transparent: colors.transparent,
  },
};

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer theme={whiteColors}>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerBackTitleVisible: false,
            title: "Character Details",
            headerStyle: {
              borderWidth: 0,
              borderColor: colors.white,
              backgroundColor: colors.light,
            },
          }}
          name="details"
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});

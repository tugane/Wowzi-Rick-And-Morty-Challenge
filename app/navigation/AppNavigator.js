import { StyleSheet } from "react-native";
import React from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import colors from "../config/colors";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

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

const Stack = createSharedElementStackNavigator();
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
          sharedElements={(route) => {
            const { character } = route.params;
            return [`character.${character.id}.photo`];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});

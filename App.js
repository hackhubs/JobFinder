import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthNavigation from "./app/navigation/AuthNavigation";
import AppBottom from "./app/navigation/AppBottom";
import AppBottomEpe from "./app/navigation/AppBottomEpe";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Auth" component={AuthNavigation} />
        <Stack.Screen name="Employer" component={AppBottom} />
        <Stack.Screen name="Employee" component={AppBottomEpe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

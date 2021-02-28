import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthNavigation from "./app/navigation/AuthNavigation";
import AppBottom from "./app/navigation/AppBottom";
import AppBottomEpe from "./app/navigation/AppBottomEpe";
import ChatView from "./app/screens/Employer/ChatView";
import ChatViewEpe from "./app/screens/Employee/ChatViewEpe";
import Chat from "./app/screens/Employer/Chat";
import ChatEpe from "./app/screens/Employee/ChatEpe";
import Home from "./app/screens/Employer/Home";
import details from "./app/screens/Employer/details";
import FillJob from "./app/screens/Employer/FillJob";

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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={details} />
        <Stack.Screen
          name="Add Job"
          component={FillJob}
          options={{ headerShown: true }}
        />

        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Chats"
          component={ChatEpe}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="ChatView"
          component={ChatView}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="ChatViewEpe"
          component={ChatViewEpe}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

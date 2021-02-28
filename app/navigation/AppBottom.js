import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../screens/Employer/Home";
import FillJob from "../screens/Employer/FillJob";
import Profiler from "../screens/Employer/Profiler";

const Tab = createBottomTabNavigator();
const EmptyScreen = () => {
  return null;
};

const AppBottom = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeBackgroundColor: "#7cd5f3",
      activeTintColor: "black",
      inactiveBackgroundColor: "#0f5e85",
      inactiveTintColor: "white",
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon name="home-variant-outline" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="jobs"
      component={FillJob}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon name="plus-circle-outline" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="ChatScreen"
      component={EmptyScreen}
      options={{
        tabBarLabel: "Chat",
        tabBarIcon: ({ size, color }) => (
          <Icon name="chat-outline" size={size} color={color} />
        ),
    
      }}
      listeners={({ navigation }) => ({
        tabPress: (event) => {
          event.preventDefault();
          navigation.navigate("Chat");
        },
      })}
    />
    <Tab.Screen
      name="Profile"
      component={Profiler}
      options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ size, color }) => (
          <Icon name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppBottom;

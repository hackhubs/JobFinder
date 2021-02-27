import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import HomeEp from "../screens/Employee/HomeEp";
import AddJob from "../screens/Employee/AddJob";
import Profile from "../screens/Employee/Profile";
import ChatEpe from "../screens/Employee/ChatEpe";

const Tab = createBottomTabNavigator();

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
      component={HomeEp}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon name="home-variant-outline" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Appointment"
      component={AddJob}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon name="plus-circle-outline" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={ChatEpe}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon name="chat-outline" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppBottom;

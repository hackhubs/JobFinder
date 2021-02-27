import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import HomeEp from "../screens/Employer/HomeEp";
import AddJob from "../screens/Employer/AddJob";
import Profile from "../screens/Employer/Profile";

const Tab = createBottomTabNavigator();

const AppBottom = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "#8eb1c6",
      activeTintColor: "white",
      inactiveBackgroundColor: "#FCCB45",
      inactiveTintColor: "black",
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
      name="jobs"
      component={AddJob}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon name="plus-circle-outline" size={size} color={color} />
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

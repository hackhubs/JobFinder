import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../screens/Employer/Home";
import FillJob from "../screens/Employer/FillJob";

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
  </Tab.Navigator>
);

export default AppBottom;

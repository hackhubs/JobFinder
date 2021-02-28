import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import HomeEp from "../screens/Employee/HomeEp";
import AddJob from "../screens/Employee/AddJob";
import Profile from "../screens/Employee/Profile";

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
      showLabel: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeEp}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon name="home-variant-outline" size={32} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Appointment"
      component={AddJob}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon name="plus-circle-outline" size={32} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="ChatScreen"
      component={EmptyScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon name="chat-outline" size={32} color={color} />
        ),
      }}
      listeners={({ navigation }) => ({
        tabPress: (event) => {
          event.preventDefault();
          navigation.navigate("Chats");
        },
      })}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon name="account" size={32} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppBottom;

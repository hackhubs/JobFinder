import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { Dashboard } from "../screens";

const Tab = createBottomTabNavigator();

function AppNavigationEp(props) {
  <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "#8eb1c6",
        activeTintColor: "white",
        inactiveBackgroundColor: "#FCCB45",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="home-variant-outline" size={size} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
      name="Settings"
      component={AddJob}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon name="account-outline" size={size} color={color} />
        ),
      }}
    /> */}
    </Tab.Navigator>
  </NavigationContainer>;
}

export default AppNavigationEp;

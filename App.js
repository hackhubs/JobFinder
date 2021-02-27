import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthNavigation from "./app/navigation/AuthNavigation";
import Home from "./app/screens/Employer/Home";

const Stack = createStackNavigator();

export default function App() {
  return (
<<<<<<< HEAD
    // <HomeEp />
   <AuthNavigation />
=======
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Auth" component={AuthNavigation} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
>>>>>>> b921252d486982448bdec8340ae72fb480ef642a
  );
}

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import AuthNavigation from "./app/navigation/AuthNavigation";
import StartScreen from './app/screens/StartScreen';

export default function App() {
  return (
  // <StartScreen />
   <AuthNavigation />
  );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

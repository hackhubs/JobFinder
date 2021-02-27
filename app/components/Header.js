import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { theme } from "../Constants/theme";

const Header = (props) => <Text style={styles.header} {...props} />;

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    color: theme.colors.primary,
    fontWeight: "bold",
    paddingVertical: 12,
  },
});

export default Header;

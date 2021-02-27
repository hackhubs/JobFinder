import React from "react";
import { View, StyleSheet } from "react-native";
import { logoutUser } from "../../api/auth-api";
import Button from "../../components/Button";

function Profile(props) {
  return (
    <View style={styles.container}>
      <Button mode="outlined" onPress={logoutUser}>
        Logout
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Profile;

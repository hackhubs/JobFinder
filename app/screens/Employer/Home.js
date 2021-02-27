import React from "react";
import { View, StyleSheet, Text } from "react-native";

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.text}>Abhav Thakur</Text>
        <Text>React Developer</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Home;

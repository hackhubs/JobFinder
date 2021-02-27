import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import CardStyle from "../../components/CardStyle";

<<<<<<< HEAD
const HomeEp=()=>{
=======
const HomeEp = (props) => {
>>>>>>> bf05c7de9b368e65e65b4028593fa620c0309b89
  return (
    <ScrollView>
      <View style={styles.container}>
        <CardStyle />
        <CardStyle />
        <CardStyle />
        <CardStyle />
        <CardStyle />
        <CardStyle />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default HomeEp;

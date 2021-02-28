import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import CardStyle from "../../components/CardStyle";

const HomeEp = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <CardStyle onPress={() => navigation.navigate("jobdetails")} />
        <CardStyle onPress={() => navigation.navigate("jobdetails")} />
        <CardStyle onPress={() => navigation.navigate("jobdetails")} />
        <CardStyle onPress={() => navigation.navigate("jobdetails")} />
        <CardStyle onPress={() => navigation.navigate("jobdetails")} />
        <CardStyle onPress={() => navigation.navigate("jobdetails")} />
        <CardStyle onPress={() => navigation.navigate("jobdetails")} />
        {/* <CardStyle />
        <CardStyle />
        <CardStyle />
        <CardStyle />
        <CardStyle /> */}
      </View>
    </ScrollView>
  );
};

export default HomeEp;

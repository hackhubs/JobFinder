import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import CardStyle from "../../components/CardStyle";

const HomeEp=()=>{
  return (
    <ScrollView>
      <View>
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

export default HomeEp;

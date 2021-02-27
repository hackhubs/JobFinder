import React from "react";
import { View, StyleSheet, Text,ScrollView } from "react-native";
import CardStyle from '../../components/CardStyle';

const HomeEp(props)=()=>{
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

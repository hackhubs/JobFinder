import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

const AddJob = () => {
  return (
    <View style={styles.screen}>
      <View styles={styles.cont}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Company Name</Text>
        <Text>Aanya Enterprises</Text>
      </View>
      <View styles={styles.cont}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>About Company</Text>
        <Text>
          Aanya Enterprises started in 2001, is a non-profit organization
          committed to bringing the best educational resources to under-served
          tribal communities of Chandrapur district (haryana). We always
          stressed on activities and strategies that cover the whole cycle of
          what is required for providing quality education to an individual
          child in a structured manner. Our mission is to build a platform for
          vulnerable and oppressed children, living in poverty. Thus empowering
          them with a well-equipped education system and gaining knowledge to
          alleviate poverty.
        </Text>
      </View>
      <View styles={styles.cont}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Job Type</Text>
        <Text>Business development</Text>
      </View>
      <View styles={styles.cont}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>About job</Text>
        <Text>
          1. Raise funds for the organization by pitching your personal network
          2. Communicate with the team efficiently 3. Formulate strategies to
          raise funds 4. Promote our NGO's initiatives on various social media
          platforms 5. Identify donors and raising funds
        </Text>
      </View>
      <View styles={styles.cont}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Salary/month</Text>
        <Text>Rs. 35000 </Text>
      </View>
      <View styles={styles.cont}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Skills required
        </Text>
        <Text>Data Science,ML,Excel,basic knowledge of data analyis</Text>
      </View>
      <View style={styles.sideCont}>
        <View styles={styles.cont}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Start Date</Text>
          <Text>13 March,2021</Text>
        </View>
        <View styles={styles.cont}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Duration</Text>
          <Text>2 years</Text>
        </View>
        <View styles={styles.cont}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Vacancies</Text>
          <Text>2</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 20,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  cont: {
    width: 30,
    height: 20,
  },
  sideCont: {
    flexDirection: "row",
    margin: 10,
  },
});

export default AddJob;

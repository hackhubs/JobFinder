import React from "react";
import { Image, StyleSheet } from "react-native";
import Background from "../components/Background";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { logoutUser } from "../api/auth-api";
import Colors from "../Constants/Colors";

const Dashboard = ({ navigation }) => (
  <Background>
    <Image source={require("../assets/job1.jpg")} style={styles.image}></Image>
    <Header>Let’s start</Header>
    <Paragraph>
      Your amazing app starts here. Open you Category and get started.
    </Paragraph>
    <Button
      style={{ backgroundColor: Colors.commonColor }}
      mode="outlined"
      onPress={() => navigation.navigate("Employer")}
    >
      Employer
    </Button>
    <Button
      style={{ backgroundColor: Colors.primaryColor }}
      mode="contained"
      onPress={() => navigation.navigate("Employee")}
    >
      Employee/student
    </Button>
    {/* <Button mode="outlined" onPress={logoutUser} style={{ top: 80 }}>
      Logout
    </Button> */}
  </Background>
);

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    marginTop: -40,
    justifyContent: "center",
    width: 300,
    borderRadius: 5,
    borderColor: Colors.secondaryColor,
    borderWidth: 2,
    height: 300,
  },
});

export default Dashboard;

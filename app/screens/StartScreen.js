import React from "react";
import {ImageBackground,View,Text,StyleSheet} from 'react-native';
import Background from "../components/Background";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import Colors from '../Constants/Colors';

const StartScreen = ({ navigation }) => (
  <Background>
      <ImageBackground source={require("../assets/main.jpg")} style={styles.image}>
      </ImageBackground>
  
    <Header>Welcome to the JobFinder App!!</Header>
    <Paragraph>The easiest way to start with your Job Application.</Paragraph>
    <Button  style={{ backgroundColor: Colors.primaryColor }} mode="contained" onPress={() => navigation.navigate("LoginScreen")}>
      Login
    </Button>
    <Button style={{ backgroundColor: Colors.commonColor }}
      mode="outlined"
      onPress={() => navigation.navigate("RegisterScreen")}
    >
      Sign Up
    </Button>
  </Background>
);

const styles = StyleSheet.create({
  image: {
    resizeMode:'cover',
    justifyContent: 'center',
    width:300,
    height:300,
    margin:10,
  },
});

export default StartScreen;

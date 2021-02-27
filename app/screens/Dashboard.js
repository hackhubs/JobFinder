import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { logoutUser } from "../api/auth-api";

const Dashboard = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Let’s start</Header>
    <Paragraph>
      Your amazing app starts here. Open you Category and get started.
    </Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate("Employer")}>
      Employer
    </Button>
    <Button mode="contained" onPress={() => navigation.navigate("HomeEp")}>
      Employee/student
    </Button>

    <Button mode="outlined" onPress={logoutUser} style={{ top: 80 }}>
      Logout
    </Button>
  </Background>
);

export default Dashboard;

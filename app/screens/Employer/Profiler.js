import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { logoutUser } from "../../api/auth-api";
import { Foundation } from '@expo/vector-icons';
import Button from "../../components/Button";
import Colors from "../../Constants/Colors";

export default class Profiler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          image: "https://img.icons8.com/color/70/000000/cottage.png",
          title: "Skills: React-Native,React-JS,CPP,C,Java",
        },
        {
          id: 2,
          image:
            "https://img.icons8.com/color/70/000000/administrator-male.png",
          title: "jainaanya2000@gmail.com",
        },
        {
          id: 3,
          image: "https://img.icons8.com/color/70/000000/filled-like.png",
          title: "+91-8950501910",
        },
        {
          id: 4,
          image: "https://img.icons8.com/color/70/000000/facebook-like.png",
          title: "Senior Frontend Developer at Sellify",
        },
        {
          id: 5,
          image: "https://img.icons8.com/color/70/000000/shutdown.png",
          title: "Edit Profile",
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={require("../../assets/aanya2.jpeg")}
            />
            <Text style={styles.username}>Aanya Jain</Text>
          </View>
        </View>

        <View style={styles.body}>
          <FlatList
            style={styles.container}
            enableEmptySections={true}
            data={this.state.data}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity>
                  <View style={styles.box}>
                    <Image style={styles.icon} source={{ uri: item.image }} />
                    <Text style={styles.title}>{item.title}</Text>
                    <Image
                      style={styles.btn}
                      source={{
                        uri: "https://img.icons8.com/customer/office/40",
                      }}
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Button
          mode="outlined"
          onPress={logoutUser}
          style={{
            top: 80,
            marginLeft: 40,
            width:'80%',
            borderRadius: 8,
            backgroundColor: Colors.secondaryColor,
            shadowColor: Colors.commonColor,
            shadowOpacity: 0.2,
            shadowOffset: {
              height: 1,
              width: -2,
            },
            elevation: 2,
          }}
        >
          Logout
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f9f9f3",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: Colors.commonColor,
    marginBottom: 10,
    marginTop: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 18,
    color: Colors.darkColor,
    marginLeft: 4,
    marginTop: 6,
  },
  btn: {
    marginLeft: "auto",
    width: 40,
    height: 40,
  },
  body: {
    backgroundColor: "#E6E6FA",
  },
  box: {
    padding: 5,
    marginBottom: 5,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
    borderRadius: 8,
  },
  username: {
    color: Colors.darkColor,
    fontSize: 22,
    alignSelf: "center",
    marginLeft: 10,
  },
});

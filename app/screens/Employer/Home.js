import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 3,
          image: this.image,
          name: "Abhav Thakur",
          text: "React Native Developer",
          attachment: "https://via.placeholder.com/100x100/FFB6C1/000000",
        },
        {
          id: 2,
          image: this.image,
          name: "John Ray",
          text: "UI/UX Designer",
          attachment: "https://via.placeholder.com/100x100/20B2AA/000000",
        },
        {
          id: 4,
          image: this.image,
          name: "Divya Goel",
          text: "Primary School Teacher",
          attachment: "https://via.placeholder.com/100x100/20B2AA/000000",
        },
        {
          id: 5,
          image: this.image,
          name: "Mari",
          text: "Dance Teacher",
          attachment: "https://via.placeholder.com/100x100/20B2AA/000000",
        },
        {
          id: 1,
          image: this.image,
          name: "Frank Odalthh",
          text: "Business Analyst",
          attachment: "https://via.placeholder.com/100x100/7B68EE/000000",
        },
        {
          id: 6,
          image: this.image,
          name: "Clark June Boom!",
          text: "Waiter ",
          attachment: "https://via.placeholder.com/100x100/7B68EE/000000",
        },
        {
          id: 7,
          image: this.image,
          name: "John Ray",
          text: "Artist",
          attachment: "https://via.placeholder.com/100x100/7B68EE/000000",
        },
      ],
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <FlatList
        style={styles.root}
        data={this.state.data}
        extraData={this.state}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={(item) => {
          const Notification = item.item;
          let attachment = <View />;

          let mainContentStyle;
          if (Notification.attachment) {
            mainContentStyle = styles.mainContent;
            attachment = (
              <Image
                style={styles.attachment}
                source={{ uri: Notification.attachment }}
                // source={require('../../assets/abhi1.jpeg')}
              />
            );
          }
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Details")}>
              <View style={styles.container}>
                <Image
                  source={{ uri: Notification.image }}
                  style={styles.avatar}
                />
                <View style={styles.content}>
                  <View style={mainContentStyle}>
                    <View style={styles.text}>
                      <Text style={styles.name}>{Notification.name}</Text>
                      <Text>{Notification.text}</Text>
                    </View>
                    <Text style={styles.timeAgo}>2 hours ago</Text>
                  </View>
                  {attachment}
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  root: {
    margin: 10,
    padding: 3,
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    margin: 4,
    padding: 16,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#FFFFFF",
    alignItems: "flex-start",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text: {
    margin: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0,
  },
  mainContent: {
    marginRight: 60,
  },
  img: {
    height: 50,
    width: 50,
  },
  attachment: {
    position: "absolute",
    right: 0,
    height: 50,
    width: 50,
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC",
  },
  timeAgo: {
    fontSize: 12,
    color: "#696969",
  },
  name: {
    fontSize: 16,
    color: "#1E90FF",
  },
});

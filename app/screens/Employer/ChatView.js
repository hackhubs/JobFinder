import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import Colors from '../../Constants/Colors';

const { width, height } = Dimensions.get("window");
export default class ChatView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
      messages: [
        {
          id: 1,
          sent: false,
          msg: "Hello ma'am!!",
          image: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
        },
        {
          id: 2,
          sent: false,
          msg: "I am interested in the coder position at your Company",
          image: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
        },
        {
          id: 3,
          sent: true,
          msg: "Hello Anthony",
          image: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
        },
        {
          id: 4,
          sent: true,
          msg: "You are most welcome at our company,do tell your skills",
          image: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
        },
        {
          id: 5,
          sent: false,
          msg:
            "So I am good in web dev,front-end and android.",
          image: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
        },
        {
          id: 6,
          sent: false,
          msg:
            "I have worked in 2 companies before here,at Sellify and DareU.They wree great leaders and helped me a lot",
          image: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
        },
        {
          id: 7,
          sent: true,
          msg: "Well then,I think we want someone like your skills",
          image: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
        },
        {
          id: 8,
          sent: true,
          msg: "Yes,you are hired.Welcome aboard",
          image: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
        },
      ],
    };
    this.send = this.send.bind(this);
    this.reply = this.reply.bind(this);
    this.renderItem = this._renderItem.bind(this);
  }

  reply() {
    var messages = this.state.messages;
    messages.push({
      id: Math.floor(Math.random() * 99999999999999999 + 1),
      sent: false,
      msg: this.state.msg,
      image: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
    });
    this.setState({ msg: "", messages: messages });
  }

  send() {
    if (this.state.msg.length > 0) {
      var messages = this.state.messages;
      messages.push({
        id: Math.floor(Math.random() * 99999999999999999 + 1),
        sent: true,
        msg: this.state.msg,
        image: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
      });
      this.setState({ messages: messages });
      setTimeout(() => {
        this.reply();
      }, 2000);
    }
  }

  _renderItem = ({ item }) => {
    if (item.sent === false) {
      return (
        <ScrollView>
        <View style={styles.eachMsg}>
          <Image source={require("../../assets/abhi1.jpeg")} style={styles.userPic} />
          <View style={styles.msgBlock}>
            <Text style={styles.msgTxt}>{item.msg}</Text>
          </View>
        </View>
        </ScrollView>
      );
    } else {
      return (
        <ScrollView>
        <View style={styles.rightMsg}>
          <View style={styles.rightBlock}>
            <Text style={styles.rightTxt}>{item.msg}</Text>
          </View>
          <Image source={require("../../assets/aanya2.jpeg")} style={styles.userPic} />
        </View>
        </ScrollView>
      );
      
    }
  };

  render() {
    return (
      <ScrollView style={{marginTop:40}}>
      <View style={{ flex: 1 }}>
        <KeyboardAvoidingView behavior="padding" style={styles.keyboard}>
          <FlatList
            style={styles.list}
            extraData={this.state}
            data={this.state.messages}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={this.renderItem}
          />
          <View style={styles.input}>
            <TextInput
              style={{ flex: 1}}
              value={this.state.msg}
              placeholderTextColor="#696969"
              onChangeText={(msg) => this.setState({ msg })}
              blurOnSubmit={false}
              onSubmitEditing={() => this.send()}
              placeholder="Type a message"
              returnKeyType="send"
            />
          </View>
        </KeyboardAvoidingView>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width:40,
    height:40,
  },
  header: {
    height: 65,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.secondaryColor,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    flexDirection: "row",
  },
  chatTitle: {
    color: "#fff",
    fontWeight: "600",
    margin: 10,
    fontSize: 15,
  },
  chatImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 5,
  },
  input: {
    flexDirection: "row",
     alignSelf: "flex-end",
    // position:'absolute',
    // bottom:0,
    padding: 10,
    height: 40,
    width: width - 20,
    backgroundColor: "#fff",
    marginTop: 60,
    shadowColor: "#3d3d3d",
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
    borderColor: "#696969",
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
  },
  eachMsg: {
    flexDirection: "row",
    alignItems: "flex-end",
    margin: 5,
  },
  rightMsg: {
    flexDirection: "row",
    alignItems: "flex-end",
    margin: 5,
    alignSelf: "flex-end",
  },
  userPic: {
    height: 40,
    width: 40,
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#f8f8f8",
  },
  msgBlock: {
    width: 220,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    padding: 10,
    shadowColor: "#3d3d3d",
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
  },
  rightBlock: {
    width: 220,
    borderRadius: 8,
    backgroundColor: Colors.secondaryColor,
    padding: 10,
    shadowColor: "#3d3d3d",
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
  },
  msgTxt: {
    fontSize: 16,
    color: "#555",
    fontWeight: "600",
  },
  rightTxt: {
    fontSize: 16,
    color: "#202020",
    fontWeight: "600",
  },
});

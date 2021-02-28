import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";

export default class ChatEpe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calls: [
        {
          id: 1,
          name: "Mark Doe",
          status: "active",
          image: this.image,
        },
        {
          id: 2,
          name: "Clark Man",
          status: "inactive",
          image: this.image,
        },
        {
          id: 3,
          name: "Jaden Boor",
          status: "active",
          image: this.image,
        },
        {
          id: 4,
          name: "Srick Tree",
          status: "active",
          image: this.image,
        },
        {
          id: 5,
          name: "Erick Doe",
          status: "inactive",
          image: this.image,
        },
        {
          id: 6,
          name: "Francis Doe",
          status: "inactive",
          image: this.image,
        },
        {
          id: 8,
          name: "Matilde Doe",
          status: "active",
          image: this.image,
        },
        {
          id: 9,
          name: "John Doe",
          status: "active",
          image: this.image,
        },
        {
          id: 10,
          name: "Fermod Doe",
          status: "inactive",
          image: this.image,
        },
        {
          id: 11,
          name: "Danny Doe",
          status: "inactive",
          image: this.image,
        },
      ],
    };
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={styles.row}>
          <Image  source={require('../../assets/abhi1.jpeg')} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={styles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.name}
              </Text>
              <View style={{flexDirection:'column'}}>
              <Text style={styles.mblTxt}>Mobile</Text>
              <Text style={{marginTop:5,marginLeft:10,fontWeight: "200",color: "#777",fontSize: 13}}>11:08 am</Text>
              </View>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.status}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          extraData={this.state}
          data={this.state.calls}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    margin:8,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#DCDCDC",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
    marginTop:15,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: "600",
    color: "#222",
    fontSize: 18,
    width: 170,
  },
  mblTxt: {
    fontWeight: "200",
    color: "#777",
    fontSize: 13,
    marginLeft:10,
    marginTop:6,
  },
  msgContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  msgTxt: {
    fontWeight: "400",
    color: "#008B8B",
    fontSize: 12,
    marginLeft: 15,
  },
});

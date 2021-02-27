import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import Colors from '../Constants/Colors';

const CardStyle = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
       
      <Text style={styles.title}>
           BUSINESS DEVELOPMENT
          </Text>
        <Text style={styles.paragraph}>
           Aanya Enterprises
          </Text>
          <View style={styles.sideCont}>
        <View styles={styles.cont}>
          <Text style={{ fontSize: 16,margin:10, fontWeight: "bold" }}>Start Date</Text>
          <Text style={{ fontSize: 16, margin:10}}>13 March,2021</Text>
        </View>
        <View styles={styles.cont}>
          <Text style={{ fontSize: 16,margin:10,fontWeight: "bold" }}>Duration</Text>
          <Text style={{ fontSize: 16, margin:10}}>2 years</Text>
        </View>
        <View styles={styles.cont}>
          <Text style={{ fontSize: 16, margin:10,fontWeight: "bold" }}>Vacancies</Text>
          <Text style={{ fontSize: 16, margin:10}}>2</Text>
          
        </View>
      </View>
      </View>
      
    </SafeAreaView>
    
  );
};


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:20,
    backgroundColor: '#ecf0f1',
    marginTop:30,
    marginLeft:10,
    marginRight:10,

  },
  title:{
    fontSize:20,
    fontWeight:'bold',
  },
  paragraph: {
    flex:1,
    marginBottom:10,
    
  },
  cont: {
    width: 30,
    height: 20,
    
  },
  sideCont: {
    flexDirection: "row",
    marginBottom: 5,
  },
});

export default CardStyle;
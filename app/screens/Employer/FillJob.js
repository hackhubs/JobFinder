import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import Colors from '../../Constants/Colors';

const FillJob=()=>{

  const [value, onChangeText] = useState('');

return(
  <ScrollView>
    <View style={styles.screen}>
       <View styles={styles.cont}>
     <Text style={{fontSize:18,fontWeight:'bold'}}>Company Name</Text>
     <TextInput
      style={{ marginTop:10,height: 30, borderColor:'#c3c5c6', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
     </View>
     <View styles={styles.cont}>
     <Text style={{fontSize:18,fontWeight:'bold'}}>About Company</Text>
        <TextInput
      style={{ marginTop:10,height: 70, borderColor:'#c3c5c6', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
     </View>
      <View styles={styles.cont}>
     <Text style={{fontSize:18,fontWeight:'bold'}}>Job Type</Text>
     <TextInput
      style={{ marginTop:10,height: 30, borderColor:'#c3c5c6', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
     </View>
     <View styles={styles.cont}>
     <Text style={{fontSize:18,fontWeight:'bold'}}>About job</Text>
   
          <TextInput
      style={{ marginTop:10,height: 70, borderColor:'#c3c5c6', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
     </View>
     <View styles={styles.cont}>
     <Text style={{fontSize:18,fontWeight:'bold'}}>Salary/month</Text>

     <TextInput
      style={{ marginTop:10,height: 30, borderColor:'#c3c5c6', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
     </View>
     <View styles={styles.cont}>
     <Text style={{fontSize:18,fontWeight:'bold'}}>Skills required</Text>
     <TextInput
      style={{ marginTop:10,height: 30, borderColor:'#c3c5c6', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
     </View>
     <View style={styles.sideCont}>
     <View styles={styles.cont}>
     <Text style={{fontSize:18,fontWeight:'bold'}}>Start Date</Text>
     <TextInput
      style={{ margin:10,height: 30, borderColor:'#c3c5c6', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
     </View>
     <View styles={styles.cont}>
     <Text style={{fontSize:18,fontWeight:'bold'}}>Duration</Text>
 
     <TextInput
      style={{ margin:10,height: 30,width:40, borderColor:'#c3c5c6', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
     </View>
     <View styles={styles.cont}>
     <Text style={{fontSize:18,fontWeight:'bold'}}>Vacancies</Text>
     <TextInput
      style={{ margin:10,height: 30,width:30, borderColor:'#c3c5c6', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
     </View>
     <TouchableOpacity style={{margin:30}}>
       <Text>Submit</Text>
       </TouchableOpacity>
     </View>
</View>
</ScrollView>
)
};

const styles=StyleSheet.create({
  screen:{
    flex:1,
    margin:20,
    width:'100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  cont:{
    width:30,
    height:20
  },
  sideCont:{
    flexDirection:'row',
    margin:10,
    
  }
})

export default FillJob;
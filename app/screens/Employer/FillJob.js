import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import TextInput from "../../components/TextInput";
import Colors from '../../Constants/Colors';
import DateTimePicker from "@react-native-community/datetimepicker";

const FillJob = () => {
  const [value, onChangeText] = useState("");
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View styles={styles.cont}>
          <TextInput
            label="Company Name"
            returnKeyType="next"
            // value={name.value}
            // onChangeText={(text) => setName({ value: text, error: "" })}
            // error={!!name.error}
            // errorText={name.error}
            onChangeText={(text) => onChangeText(text)}
            value={value}
          />
        </View>
        <View styles={styles.cont}>
          <TextInput
            label="About Company"
            returnKeyType="next"
            // value={name.value}
            // onChangeText={(text) => setName({ value: text, error: "" })}
            // error={!!name.error}
            // errorText={name.error}
          />
        </View>
        <View styles={styles.cont}>
          <TextInput
            label="Job Details"
            returnKeyType="next"
            // value={name.value}
            // onChangeText={(text) => setName({ value: text, error: "" })}
            // error={!!name.error}
            // errorText={name.error}
          />
        </View>
        <View styles={styles.cont}>
          <TextInput
            label="About Job"
            returnKeyType="next"
            // value={name.value}
            // onChangeText={(text) => setName({ value: text, error: "" })}
            // error={!!name.error}
            // errorText={name.error}
            numberOfLines={2}
          />
        </View>
        <View styles={styles.cont}>
          <TextInput
            label="Salary/Month"
            returnKeyType="next"
            // value={name.value}
            // onChangeText={(text) => setName({ value: text, error: "" })}
            // error={!!name.error}
            // errorText={name.error}
          />
        </View>
        <View styles={styles.cont}>
          <TextInput
            label="Skills Required"
            returnKeyType="next"
            // value={name.value}
            // onChangeText={(text) => setName({ value: text, error: "" })}
            // error={!!name.error}
            // errorText={name.error}
          />
        </View>
        <View style={styles.sideCont}>
          <View styles={styles.cont}>
            {/* <TextInput
              label="Start Date"
              returnKeyType="next"
              // value={name.value}
              // onChangeText={(text) => setName({ value: text, error: "" })}
              // error={!!name.error}
              // errorText={name.error}
            /> */}
            <View>
              <View style={{ justifyContent: "space-between" }}>
                <Button onPress={showDatepicker} title="Show date picker!" />
                <Button onPress={showTimepicker} title="Show time picker!" />
              </View>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </View>
          </View>
          <View styles={styles.cont}>
            <TextInput
              label="Duration"
              returnKeyType="next"
              // value={name.value}
              // onChangeText={(text) => setName({ value: text, error: "" })}
              // error={!!name.error}
              // errorText={name.error}
            />
          </View>
          <View styles={styles.cont}>
            <TextInput
              label="Vacancies"
              returnKeyType="next"
              // value={name.value}
              // onChangeText={(text) => setName({ value: text, error: "" })}
              // error={!!name.error}
              // errorText={name.error}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{
            margin: 30,
            backgroundColor: Colors.secondaryColor,
            color:'white',
            padding: 15,
            borderRadius: 30,
            alignItems: "center",
          }}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 20,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingRight: 36,
  },
  cont: {
    width: 100,
    height: 10,
 
  },
  sideCont: {
    flexDirection: "column",
  },
});

export default FillJob;

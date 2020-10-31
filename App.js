import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>BMI </Text>
      <View style={styles.in}>
        <TextInput style={styles.weight} placeholder="Weight" />
        <TextInput style={styles.height} placeholder="Height" />
        <TouchableOpacity
          style={{ height: "100%", width: "100%", alignItems: "center" }}
        >
          <Text style={styles.cal}>Calculate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight,
  },
  txt: {
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 60,
  },
  in: {
    flex: 1.5,
    width: "100%",
    alignItems: "center",
  },
  weight: {
    height: "12%",
    width: "90%",
    backgroundColor: "white",
    margin: 10,
    textAlign: "center",
    borderRadius: 30,
  },
  height: {
    height: "12%",
    width: "90%",
    backgroundColor: "white",
    margin: 10,
    textAlign: "center",
    borderRadius: 30,
  },
  cal: {
    height: "12%",
    width: "50%",
    backgroundColor: "#e81e1e",
    marginTop: 50,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 30,
    fontSize: 25,
    color: "white",
  },
});

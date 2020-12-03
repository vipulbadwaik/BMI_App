import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableHighlight,
} from "react-native";

export default function App() {
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const weightadd = () => {
    setweight(weight + 1);
  };
  const weightsub = () => {
    if (weight >= 1) {
      setweight(weight - 1);
    }
  };
  const heightadd = () => {
    setheight(height + 1);
  };
  const heightsub = () => {
    if (height >= 1) {
      setheight(height - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>BMI</Text>
      </View>
      <View style={{ flex: 2 }}>
        <View style={styles.area1}>
          <TouchableOpacity
            onPress={() => {
              weightsub();
            }}
          >
            <Text style={styles.txtstyle}>-</Text>
          </TouchableOpacity>
          <Text
            style={{
              ...styles.txtstyle,
              color: "black",
              paddingHorizontal: 30,
            }}
          >
            {weight}
          </Text>
          <TouchableOpacity
            onPress={() => {
              weightadd();
            }}
          >
            <Text style={styles.txtstyle}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.area2}>
          <TouchableOpacity
            onPress={() => {
              heightsub();
            }}
          >
            <Text style={styles.txtstyle}>-</Text>
          </TouchableOpacity>
          <Text
            style={{
              ...styles.txtstyle,
              color: "black",
              paddingHorizontal: 30,
            }}
          >
            {height}
          </Text>
          <TouchableOpacity
            onPress={() => {
              heightadd();
            }}
          >
            <Text style={styles.txtstyle}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.area3}>
          <TouchableOpacity>
            <Text style={styles.txtcal}>Calculate</Text>
          </TouchableOpacity>
        </View>
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
  area1: {
    flexDirection: "row",
    alignSelf: "center",
  },
  area2: {
    flexDirection: "row",
  },
  txtstyle: {
    fontSize: 100,
    color: "red",
    fontWeight: "bold",
  },
  title: {
    fontSize: 80,
    paddingTop: 50,
  },
  txtcal: {
    fontSize: 40,
    color: "white",
    backgroundColor: "red",
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 20,
    marginTop: 100,
  },
});

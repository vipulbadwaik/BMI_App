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
  Modal,
} from "react-native";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [weight, setweight] = useState(1);
  const [height, setheight] = useState(1);
  const weightadd = () => {
    setweight(weight + 1);
  };
  const weightsub = () => {
    if (weight >= 2) {
      setweight(weight - 1);
    }
  };
  const heightadd = () => {
    setheight(height + 1);
  };
  const heightsub = () => {
    if (height >= 2) {
      setheight(height - 1);
    }
  };

  const [bmi, setbmi] = useState(1);
  const [result, setresult] = useState();
  const calculatebmi = (a, b) => {
    setbmi(a / (b * b));
    const c = bmi;
    if (c < 18.5) {
      setresult("Underweight");
    } else if (c > 18.5 && c < 25) {
      setresult("Normal Weight");
    } else if (c >= 25 && c < 30) {
      setresult("Overweight");
    } else {
      setresult("Obesity");
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.modalstyle}>
          <Text
            style={styles.modaltext}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            Your BMI = {bmi}
          </Text>
          <Text style={styles.modaltext1}>{result}</Text>
        </View>
      </Modal>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>BMI Calculator</Text>
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
              width: "50%",
              textAlign: "center",
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
              width: "50%",
              textAlign: "center",
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
            <Text
              style={styles.txtcal}
              onPress={() => {
                setModalVisible(true);
                calculatebmi(weight, height);
              }}
            >
              Calculate
            </Text>
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
    alignSelf: "center",
  },
  txtstyle: {
    fontSize: 100,
    color: "red",
    fontWeight: "bold",
  },
  title: {
    fontSize: 70,
    paddingTop: 50,
    textAlign: "center",
    textShadowColor: "red",
    textShadowRadius: 15,
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
  modalstyle: {
    height: "15%",
    width: "82%",
    backgroundColor: "white",
    borderRadius: 20,
    alignSelf: "center",
    marginTop: "125%",
  },
  modaltext: {
    textAlign: "center",
    fontSize: 30,
    flex: 1,
    backgroundColor: "#4a8cf0",
    color: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modaltext1: {
    fontSize: 40,
    textAlign: "center",
    backgroundColor: "#4a8cf0",
    flex: 1,
    color: "white",
    fontWeight: "bold",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

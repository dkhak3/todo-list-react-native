import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.top}>
          <Text style={styles.topText}>Top Left</Text>
        </View>
      </View>
      <View style={styles.containerCenter}>
        <View style={styles.center}>
          <Text style={styles.centerText}>Center</Text>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>Bottom Right</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E7FEFE",
    flex: 1,
  },
  containerTop: {
    flex: 1,
  },
  containerCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerBottom: {
    flex: 1,
  },
  bottom: {
    marginTop: 80,
    marginLeft: 40,
    marginRight: 40,
    backgroundColor: "#67BCD0",
    padding: 15,
    borderRadius: 20,
  },
  bottomText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
  },
  top: {
    marginTop: 80,
    marginLeft: 40,
    marginRight: 40,
    backgroundColor: "#fff",
    padding: 15,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "red",
    borderRadius: 5,
  },
  topText: {
    color: "#63AEC6",
    fontSize: 20,
    fontWeight: "bold",
  },
  center: {
    width: 150,
    height: 150,
    backgroundColor: "#32FF61",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  centerText: {
    color: "#63AEC6",
    fontSize: 20,
    fontWeight: "bold",
  },
});

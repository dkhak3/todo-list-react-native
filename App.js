import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.center, styles.top]}>
        <Text style={[styles.text, styles.topText]}>Top Left</Text>
      </View>
      <View style={styles.bottom}>
        <View style={[styles.center, styles.bottomLeft]}>
          <Text style={[styles.text, styles.bottomText]}>Bottom Left</Text>
        </View>
        <View style={styles.bottomRight}>
          <View style={[styles.center, styles.bottomRightTop]}>
            <Text style={[styles.text, styles.bottomTextTop]}>Right Top</Text>
          </View>
          <View style={[styles.center, styles.bottomRightBottom]}>
            <Text style={[styles.text, styles.bottomTextBottom]}>
              Right Bottom
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    flex: 1,
    backgroundColor: "#F4FE87",
  },
  topText: {
    color: "#63AEC6",
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
  },
  bottomLeft: {
    backgroundColor: "#3DEE84",
    flex: 1,
  },
  bottomText: {
    color: "#63AEC6",
  },
  bottomRight: {
    flex: 1,
  },
  bottomRightTop: {
    backgroundColor: "#EF3DE7",
    flex: 2,
  },
  bottomTextTop: {
    color: "#fff",
  },
  bottomRightBottom: {
    backgroundColor: "#2C83B2",
    flex: 1,
  },
  bottomTextBottom: {
    color: "#fff",
  },
});

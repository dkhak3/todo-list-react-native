import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";

export default function Form({ onAddTask }) {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (!task) {
      alert("Vui lòng nhập công việc!");
      return false;
    }
    onAddTask(task);
    setTask("");
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
      style={styles.addTask}
    >
      <TextInput
        onChangeText={(text) => setTask(text)}
        value={task}
        placeholder="Your Task"
        style={styles.input}
      />
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

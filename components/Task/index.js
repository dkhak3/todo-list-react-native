import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

const Task = ({ task, number, onDeleteTask }) => {
  return (
    <TouchableOpacity onPress={onDeleteTask} style={styles.button}>
      <View style={styles.item}>
        <View
          style={
            number % 2 === 0
              ? [styles.square, styles.even]
              : [styles.square, styles.odd]
          }
        >
          <Text style={styles.number}>
            {number < 10 ? "0" + number : number}
          </Text>
        </View>
        <Text style={styles.content}>{task}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Task;

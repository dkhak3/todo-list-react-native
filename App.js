import React, { useState } from "react";
import { Text, View, ScrollView, Alert } from "react-native";
import Task from "./components/Task";
import Form from "./components/Form";
import styles from "./App.components.style";

export default function App() {
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = (task) => {
    // add task
    setTaskList([...taskList, task]);
  };

  const handleDeleteTask = (index) => {
    // delete task
    Alert.alert("Thông báo", "Bạn có chắc chắn muốn xóa?", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          let taskListTmp = [...taskList];
          taskListTmp.splice(index, 1);
          setTaskList(taskListTmp);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          {taskList.map((item, index) => (
            <Task
              key={`${index}-${Math.random()}`}
              task={item}
              number={index + 1}
              onDeleteTask={() => handleDeleteTask(index)}
            />
          ))}
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />
    </View>
  );
}

import React, { useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, View, Text } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (name, desc) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Date.now().toString(), name, desc },
    ]);
  };

  const deleteTaskHandler = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TaskInput onAddTask={addTaskHandler} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onDelete={() => deleteTaskHandler(item.id)} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});

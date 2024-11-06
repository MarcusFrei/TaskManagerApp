import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TaskItem = ({ task, onDelete }) => {
  return (
    <View style={styles.taskItem}>
      <View>
        <Text style={styles.taskName}>{task.name}</Text>
        <Text style={styles.taskDesc}>{task.desc}</Text>
      </View>
      <Button title="Delete" onPress={onDelete} color="#ff5c5c" />
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  taskName: {
    fontWeight: 'bold',
  },
  taskDesc: {
    color: '#666',
  },
});

export default TaskItem;

import React, { useState, useRef } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TaskInput = ({ onAddTask }) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const descInputRef = useRef();

  const addTask = () => {
    if (name.trim() && desc.trim()) {
      onAddTask(name, desc);
      setName('');
      setDesc('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        onSubmitEditing={() => descInputRef.current.focus()}
        returnKeyType="next"
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={desc}
        onChangeText={setDesc}
        ref={descInputRef}
      />
      <Button title="Add Task" onPress={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 8,
    marginBottom: 8,
  },
});

export default TaskInput;

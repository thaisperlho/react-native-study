import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Keyboard } from 'react-native';
import firebase from './src/firebaseConnection';
import Icon from 'react-native-vector-icons/Feather';
import TaskList from './src/TaskList';
import { database } from './src/firebaseConnection';
import { ref, onValue, push, set, remove } from "firebase/database";

console.disableYellowBox = true;

export default function App() {
  const inputRef = useRef(null);
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [key, setkey] = useState('');

  useEffect(() => {
    const loadTasks = () => {
      const tasksRef = ref(database, 'tarefas'); onValue(tasksRef, (snapshot) => {
        const loadedTasks = []; snapshot.forEach((childItem) => {
          loadedTasks.push({
            key: childItem.key,
            nome: childItem.val().nome
          });
        });
        setTasks(loadedTasks);
      });
    };
    loadTasks();
  }, []);
  const handleAdd = async () => {
    if (newTask !== '') {
      if (key !== '') {
        await set(ref(database, `tarefas/${key}`), {
          nome: newTask
        });
        Keyboard.dismiss();
        setNewTask('');
        setkey('');
        return;
   
      }
      const tasks = ref(database, 'tarefas'); const newTaskRef = push(tasks); await set(newTaskRef, {
        nome: newTask
      });
      Keyboard.dismiss();
      setNewTask('');
      
    }
  };
  const handleDelete = async (key) => {
    const taskRef = ref(database, `tarefas/${key}`); await remove(taskRef);
  };
  const handleEdit = (data) => {
    setNewTask(data.nome); 
    setkey(data.key); 
    inputRef.current.focus();
  };
  function cancelEdit(){
    setkey('');
    setNewTask('');
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      {key.length > 0 && (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={cancelEdit}>
            <Icon name="x-circle" size={20} color="#FF0000" />
          </TouchableOpacity>
          <Text
            style={{ marginLeft: 5, marginBottom: 8, color: '#FF0000' }}
          >
            Você esta editando uma tarefa!
          </Text>
        </View>
      )}
      <Text style={{ marginBottom: 10, fontSize: 25 }}>Lista de Tarefas</Text>
      <View style={styles.containerTask}> <TextInput
        style={styles.input}
        placeholder="O que vai fazer hoje?" underlineColorAndroid="transparent" onChangeText={setNewTask} value={newTask}
      />
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
          <Text style={styles.buttonText}>+</Text> </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.key} renderItem={({ item }) => (
          <TaskList data={item} deleteItem={handleDelete} editItem={handleEdit} />)}
      /> </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  containerTask: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    width: "90%",
    height: 40,
    borderColor: '#121212',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  buttonAdd: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    height: 40,
    marginLeft: 5,
    padding: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
  }

});

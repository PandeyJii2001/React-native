import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native'

function TodoForm({ navigation, props }) {

    const [displaytodos, setDisplaytodos] = useState([]);

    const [yourName, setYourName] = useState('');
    const [todoItem, setTodoItem] = useState('');
    
    const fun = async()=>{
        let result =await  AsyncStorage.getItem('MyContent');
       
        setDisplaytodos(JSON.parse(result));
      }
      
      useEffect(()=>{
       fun();
      },[])



   const addTodoItem = async(newtodoitem) => {

    let todoListitem = displaytodos;
    todoListitem.push(newtodoitem);
    setDisplaytodos(todoListitem);
      
    await AsyncStorage.setItem(
        'MyContent',
        JSON.stringify(displaytodos)
          ); 
  }

    return (

        <ScrollView style={styles.container}>

            <View >
                <TextInput style={styles.input}
                    placeholder="Enter your name"
                    keyboardType="default"
                    onChangeText={(enterName) => {
                        setYourName(enterName);
                    }}
                >
                </TextInput>
                <TextInput style={styles.input}
                    placeholder="Enter todo item details"
                    keyboardType="default"
                    onChangeText={(enter) => {
                        setTodoItem(enter)
                    }}
                >
                </TextInput>
            </View>




            <TouchableOpacity style={styles.btnsave}
                onPress={() => {
                    let TodoDetails = {
                        TodoItem:todoItem,
                        YourName:yourName
                    }

                    if (TodoDetails.TodoItem === '' || TodoDetails.YourName=== '') {
                        alert("Please fill all the required detail")
                    }
                    else {
                        // code to save todo item in array then save array in async storage
                        addTodoItem(TodoDetails);
                        setTodoItem('');
                        setYourName('');

                      navigation.goBack();
                        
                    }

                }}>
                <Text style={styles.textSave}>Save</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.btncancel} >
                <Text style={styles.textSave}
                    onPress={() => navigation.goBack()}
                >Cancel</Text>
            </TouchableOpacity>

        </ScrollView>
    );



}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },

    input: {
        height: 40,
        width: "95%",
        borderBottomWidth: 1,
        marginBottom: 20,
        borderBottomColor: 'gray',
        backgroundColor: 'white',
        fontSize: 17,
        textAlign: 'center',
        underlineColorAndroid: "transparent"

    },

    btnsave: {
        backgroundColor: 'green',
        padding: 10,
        marginVertical: 20,
        borderRadius: 10
    },

    btncancel: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10
    },

    textSave: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    },
})


export default TodoForm;

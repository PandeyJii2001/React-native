import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ToDo from './ToDo';
import Doing from './Doing';
import Done from './Done';

function TodoList({ navigation }) {

  // AsyncStorage.clear();

  const [toDoShow, setToDoShow] = useState('');
  const [toDoShowName, setToDoShowName] = useState('');

  const showToDo = () => {
    setToDoShow(<ToDo></ToDo>);
    setToDoShowName("todo");
    console.log("jai shree ram");
  }

  useEffect(() => {

    const unsubscribe = navigation.addListener('focus', () => {
      console.log('use Effect called in Todos from backstack');
      setToDoShowName("todo");
      showToDo();
    });
    return unsubscribe;
  }, [navigation]);



  const showDoing = () => {
    setToDoShow(<Doing></Doing>);
    setToDoShowName("doing");
  }


  const showDone = () => {
    setToDoShow(<Done></Done>);
    setToDoShowName("done");
  }

  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.testusernameView}>
        <Text style={styles.testusername}>Hello, Surya</Text>
      </View>

      <View style={styles.tododoingdoneView}>
        <Text style={toDoShowName == "todo" ? styles.tododoingdoneViewtextChange : styles.tododoingdoneViewtext}
          onPress={showToDo}>ToDo</Text>
        <Text style={toDoShowName == "doing" ? styles.tododoingdoneViewtextChange : styles.tododoingdoneViewtext}
          onPress={showDoing}>Doing</Text>
        <Text style={toDoShowName == "done" ? styles.tododoingdoneViewtextChange : styles.tododoingdoneViewtext}
          onPress={showDone}>Done</Text>
      </View>

      {toDoShow}
     
      <TouchableOpacity style={styles.addbtn}>
        <Text
          style={styles.btntext}
          onPress={() => navigation.navigate('Add An Item')}>Add Todo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center'
  },

  testusername: {
    textAlign: 'center',
    fontSize: 23,
    fontStyle: 'italic',
    fontWeight: 'bold',
    backgroundColor: 'blue',
    color: 'white',
    padding: 5,

  },

  testusernameView: {
    paddingVertical: 50
  },

  tododoingdoneView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
    width: '85%',
    borderRadius: 18,
    zIndex: 2,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 10,

    elevation: 4,

  },

  StatusDP: {
    color: 'white',
    borderRadius: 30,
    fontSize: 30,
    paddingHorizontal: 15,
    marginRight: 5,
    fontWeight: 'bold',
    textAlignVertical: 'center'
  },

  StatusDPD: {
    backgroundColor: 'green',
  },

  StatusDPP: {
    backgroundColor: 'red',
  },

  tododoingdoneViewtext: {
    fontSize: 20,
    marginHorizontal: 20,
    color: 'black'
  },

  tododoingdoneViewtextChange: {
    fontSize: 20,
    marginHorizontal: 20,
    color: 'blue'
  },


  itemTodoListView: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    paddingTop: 45,
    paddingBottom: 15,
    paddingHorizontal: 10,
    position: 'relative',
    bottom: 30,
    zIndex: 1,
  },

  itemTodoList: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 15,
    borderRadius: 18,
    zIndex: 2,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 10,

    elevation: 4,
  },

  itemTodoListText: {
    fontSize: 20,
    color: 'black',

  },

  itemTodoListTextDate: {
    fontSize: 20,
    color: 'black',
    position: 'absolute',
    right: 10,
    margin: 10,
    width: '30%',
    color: 'red'
  },

  addbtn: {
    position: 'absolute',
    right: 15,
    bottom: 25,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 15,

    zIndex: 2,
  },

  btntext: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },


  listIsEmpty: {
    fontSize: 25,
    color: 'red',
    fontStyle: 'italic',
    textAlign: 'center',

  }




});

export default TodoList;








{/* <View style={styles.itemTodoListView}>
     { todoResult && todoResult.length > 0 ?
     todoResult.map((result, index) => {
              
         return (
         
       <View style={styles.itemTodoList}>
        { result.Status=='done'?
          <Text style={[styles.StatusDP , styles.StatusDPD]} >D</Text> :
          <Text style={[styles.StatusDP, styles.StatusDPP ]} >P</Text>
       }
        <View width='40%'>
          
       <Text style={styles.itemTodoListText}>{result.Title}</Text>
       <Text style={styles.itemTodoListText}>{result.Discription}</Text>
       </View>
       <Text style={styles.itemTodoListTextDate}>{result.DueDate}</Text>
       </View>
     
      
    )

      })
      : 
      <Text style={styles.listIsEmpty}>Todo List is Empty</Text>
     }

     </View> */}
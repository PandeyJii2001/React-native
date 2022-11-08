import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SceneView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { fetchObjects } from './realm';

function ToDo() {

  const [todoResult, seTodoResult] = useState([]);

  const fun = async () => {
    let value = fetchObjects('todos');
    seTodoResult(value);
    console.log(result);


    // let result =await  AsyncStorage.getItem('todos');
    //   seTodoResult(JSON.parse(result));
    //   console.log((result));

  }

  useEffect(() => {
    fun()
  },
    [])



  return (

    <ScrollView style={styles.itemTodoListView}>
      {todoResult && todoResult.length > 0 ?

        todoResult.map((result, index) => {

          return (

            <View style={styles.itemTodoList}>
              {result.Status == 'done' ?
                <Text style={[styles.StatusDP, styles.StatusDPD]} >D</Text> :
                <Text style={[styles.StatusDP, styles.StatusDPP]} >P</Text>
              }
              <View width='40%'>

                <Text style={styles.itemTodoListText}>{result.Title}</Text>
                <Text style={styles.itemTodoListTextdisc}>{result.Discription}</Text>
              </View>
              <Text style={styles.itemTodoListTextDate}>{result.DueDate}</Text>
            </View>


          )

        })
        :
        <Text style={styles.listIsEmpty}>Todo List is Empty</Text>
      }

    </ScrollView>
  )

}


const styles = StyleSheet.create({

  StatusDP: {
    color: 'white',
    borderRadius: 30,
    fontSize: 30,
    paddingHorizontal: 15,
    marginRight: 5,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    height: 50
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

  },


  itemTodoListView: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    paddingTop: 45,
    paddingBottom: 30,
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

    alignItems: 'center',

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
    fontWeight: 'bold',
  },

  itemTodoListTextdisc: {
    fontSize: 20,
    color: 'gray',

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

  listIsEmpty: {
    fontSize: 25,
    color: 'red',
    fontStyle: 'italic',
    textAlign: 'center',

  }
});


export default ToDo;
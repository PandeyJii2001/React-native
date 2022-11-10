import React, { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { deleteRealm, fetchObjects } from './realm';
import { useNavigation } from '@react-navigation/native';


function ToDo() {
  const navigation = useNavigation();

  const [todoResult, seTodoResult] = useState([]);

  const fun = async () => {

    let value = fetchObjects('todos');
    seTodoResult(value);
    console.log(value);


    //To Delete all item from database;..deleteRealm implemenetd in realm.js file.
    // deleteRealm(value); Delete all item from database;
   

    //To Delete all item from AsyncStorage;
    // AsyncStorage.clear();

    // let result =await  AsyncStorage.getItem('todos');
    //   seTodoResult(JSON.parse(result));
    //   console.log((result));

  }

  useEffect(() => {
    fun()
  },
    [])



  const deleteItem =(object, id)=>{
  
    deleteRealm(object);

    let value = fetchObjects('todos');
    seTodoResult(value);

  }

  const ShowAlert = (object)=>{
    Alert.alert(  
      'Please select an action or cancel',  
      `Do you want to delete or edit ${object.Title} ?`,  
      [  
          {  
              text: 'Cancel',  
              // onPress: () => console.log('Cancel Pressed'),  
              // style: 'cancel',  
          },  
          {
            text: 'DELETE', 
            onPress: () =>{
              deleteItem(object, object.Id)
            } 
          },  
          {  
            text: 'EDIT',  
            onPress: () =>{
              navigation.navigate('Edit Item',  object)
            }
        },  
      ]  
  ); 
  }

  return (

    <ScrollView style={styles.itemTodoListView} 
    contentContainerStyle={{paddingTop: 45}}>
      {todoResult && todoResult.length > 0 ?

        todoResult.map((result, index) => {

          return (

            <TouchableOpacity 
             key={index} style={styles.itemTodoList}>
              {result.Status == 'done' ?
                <Text style={[styles.StatusDP, styles.StatusDPD]} >D</Text> :
                <Text style={[styles.StatusDP, styles.StatusDPP]} >P</Text>
              }
              <View width='50%'>

                <Text style={styles.itemTodoListText}>{result.Title}</Text>
                <Text style={styles.itemTodoListTextdisc}>{result.Discription}</Text>
              </View>
              <Text style={styles.itemTodoListTextDate}>{result.DueDate}</Text>
              
                <Text onPress={()=>{
                  ShowAlert(result)}
                }
                style={styles.itemTodoListTextDateDeleteEdit}>Click</Text>
               
               </TouchableOpacity>
                

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
    fontSize: 25,
    paddingRight: 8,
    paddingLeft: 12,
    marginRight: 5,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    height: 40,

    // borderWidth:2
  },

  StatusDPD: {
    backgroundColor: 'green',
  },

  StatusDPP: {
    backgroundColor: 'red',
  },


  itemTodoListView: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',

    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,

    
    overflow: "hidden",
   background: 'transparent',
    paddingHorizontal: 5,
    // position: 'relative',
    // bottom: 30,
    
    zIndex: 1,

  },

  itemTodoList: {
   
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 5,
    borderRadius: 18,
    zIndex: 1,

    alignItems: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 10,

    elevation: 4,

    // borderWidth:2
  },

  itemTodoListText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
   
    // borderWidth:2
  },

  itemTodoListTextdisc: {
    fontSize: 20,
    color: 'gray',
   
    // borderWidth:2
  },

  itemTodoListTextDate: {
    fontSize: 20,
    color: 'black',
    position: 'absolute',
    right: 53,
    paddingVertical: 3,
    // margin: 10,
    width: '25%',
    color: 'red',

    // borderWidth:2
  },

  itemTodoListTextDateDeleteEdit:{
    position: 'absolute',
    right: 2,
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'green',
    fontSize: 18,
    color: 'white', 

    // borderWidth:2,
   
  },



  listIsEmpty: {
    fontSize: 25,
    color: 'red',
    fontStyle: 'italic',
    textAlign: 'center',

  }
});


export default ToDo;
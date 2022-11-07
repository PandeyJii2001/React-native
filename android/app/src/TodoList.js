import  AsyncStorage  from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function TodoList({ navigation }) {

  
  const[todoResult, seTodoResult]= useState([]);

  const fun = async()=>{
    let result =await  AsyncStorage.getItem('MyContent');
   
      seTodoResult(JSON.parse(result));
      console.log((result));
      
   
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('use Effect called in Todos from backstack');
      fun();
    });
    return unsubscribe;
  }, [navigation]);

 
  

  return (  

  <SafeAreaView style={styles.container}>

    <View style={styles.testusernameView}>
      <Text style={styles.testusername}>Hello, Surya</Text>
    </View>

     <View style={styles.tododoingdoneView}>
      <Text style={styles.tododoingdoneViewtext}>ToDo</Text>
      <Text style={styles.tododoingdoneViewtext}>Doing</Text>
      <Text style={styles.tododoingdoneViewtext}>Done</Text>
     </View>
     <View style={styles.itemTodoListView}>
     {todoResult.map((result, index) => {
              
         return (
         
       <View style={styles.itemTodoList}>
       <Text style={styles.itemTodoListText}>{result.YourName}</Text>
       <Text style={styles.itemTodoListTextDate}>{result.TodoItem}</Text>
       </View>
     
      
    )

})}
     </View>

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

  testusernameView :{
      paddingVertical: 50
  },

  tododoingdoneView:{
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
     
    position:'relative',
    left: 30
    //   alignItems:'center',
    // justifyContent:'center'
  },

  tododoingdoneViewtext:{
    fontSize: 20,
    marginHorizontal: 20,
    
  },
   
  itemTodoListView:{
    height: '100%',
    backgroundColor: 'white',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    paddingTop: 45,
    paddingBottom: 15,
    paddingHorizontal:10,
    position: 'relative',
    bottom: 30,
    zIndex: 1,
  },

  itemTodoList :{
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
   
    itemTodoListText:{
      fontSize: 20,
      color: 'black',
      
    },

    itemTodoListTextDate:{
      fontSize: 20,
      color: 'black',
      position: 'absolute',
      right: 10,
      margin:10
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

  

  

  

});

export default TodoList;
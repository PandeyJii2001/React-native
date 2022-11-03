import React, { useState } from "react";
import {
    StyleSheet,
    SafeAreaView,
    TouchableHighlight, Text, TextInput, View, TouchableOpacity
} from "react-native";

function Login(props) {

   const[isValid, setIsValid]= useState('');

   let validemail="/\S+@\S+\.\S+/";
   
   const checkemail = (email)=>{
      if(validemail.test(email)){
        setIsValid("inValid email");
      }
      else{
        setIsValid('');
      }
            
   }


    return (
        <SafeAreaView style={[ styles.container]}>
            <View>
                <Text style={styles.text}>Log-In</Text>
                <TextInput style={styles.input}
                placeholder="Enter your email"
                
                ></TextInput>
                <Text>{isValid}</Text>
                <TextInput style={styles.input}
                placeholder="Enter password"
                    ></TextInput>
                 <TouchableOpacity style={styles.btn}>
                    <Text style={styles.textlogin}>Log-In</Text>
                </TouchableOpacity>   
                
            </View>
            <View style={styles.viewdesc}>
                <Text>Don't have an account?</Text>
                <TouchableHighlight onPress={()=>{props.SetShow(!props.show)}}>
                    <Text style={styles.viewdesctext}> Sign up</Text>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
      
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 2,
     
        backgroundColor: '#DCDCDC',
        borderTopEndRadius: 8,
        borderTopLeftRadius: 8,
        
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        
    },
    
    text: {
        fontSize: 25,
        padding: 30,
        color: 'black',
        textAlign: 'center',

    },

    input:{
        height: 40, 
        width: "95%", 
        borderBottomWidth: 1,  
        marginBottom: 20,
        borderBottomColor: 'gray', 
        fontSize: 17,
        textAlign: 'center',
        underlineColorAndroid:"transparent"
        
    },

    btn: {
        backgroundColor: 'purple',
        padding: 10,
        marginVertical: 20,
        borderRadius: 10
    },

    textlogin: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        
    },

    viewdesc: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    viewdesctext: {
        color: 'purple',
        fontWeight: 'bold'
    }
});




export default Login;
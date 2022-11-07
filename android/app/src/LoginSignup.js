

import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text
} from "react-native";

import Login from "./Login";
import SignIn from "./SignIn";

function LoginSignup(props) {

  const [showPage, setShowPage] = useState(true);

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.text} >Todo App</Text>

      {showPage ? <Login show={showPage} SetShow={setShowPage} /> :
        <SignIn show={showPage} SetShow={setShowPage} />}

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FFFF'
  },
  text: {
    fontSize: 25,
    padding: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',

  },


});




export default LoginSignup;




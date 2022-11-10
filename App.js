import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView
} from "react-native";

import MainScreen from "./android/app/src/MainScreen";
import Login from "./android/app/src/Form/Login";

function App() {

  const [showloginSignupMainPage, setShowloginSignupMainPage] = useState(false);
  const [showPage, setShowPage] = useState(true);


  return (
    <SafeAreaView style={styles.container}>

      {showloginSignupMainPage ? <Login showShowloginSignupMainPage={showloginSignupMainPage}
        SetShowloginSignupMainPage={setShowloginSignupMainPage}
        show={showPage} SetShow={setShowPage} /> :
        <MainScreen />}

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




export default App;




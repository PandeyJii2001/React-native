

import React, { useState } from "react";
import { StyleSheet, 
  SafeAreaView, 
  ScrollView, Text, View } from "react-native";

  import Login from "./android/app/src/Login";
  import SignIn from "./android/app/src/SignIn";

function App() {

const[showPage, setShowPage] = useState(true);


  return (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.text}>To Do App</Text>
    </View>
    <ScrollView>
      <View>
        {showPage? <Login show={showPage} SetShow={setShowPage}  /> : 
                   <SignIn show={showPage} SetShow={setShowPage} /> }
        </View>
    </ScrollView>
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
    color : 'black',
    textAlign: 'center',
    
  },


});




export default App;




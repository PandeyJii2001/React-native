import React, { useState } from "react";
import {
    StyleSheet,
    SafeAreaView,
    TouchableHighlight, Text, TextInput, View, TouchableOpacity, Alert,
} from "react-native";

function Login(props) {

    const [emailAddress, setEmailAddress] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [showHide, setShowHide] = useState("Show");

    const [isValidEmail, setIsValidEmail] = useState("");
    const [isValidPassword, setIsValidPassword] =
        useState("Password must have alphanumeric, special and atleast 8 characters");

    let validemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let validpassword = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");

    const checkEmail = (email) => {
        if (!validemail.test(email) && email != '') {
            setIsValidEmail("Invalid email");
            setEmailAddress(email);
        }
        else {
            setIsValidEmail("");
            setEmailAddress(email);
        }

    }

    const checkPassword = (pass) => {
        if (pass.length <= 12) {

            if (!validpassword.test(pass) && pass != '') {
                setIsValidPassword("Weak password");
                setEnteredPassword(pass);
            }
            else if (validpassword.test(pass)) {
                if (pass.length >= 8) {
                    setIsValidPassword("Strong password");
                    setEnteredPassword(pass);
                }
                else {
                    setIsValidPassword("Weak password");
                    setEnteredPassword(pass);
                }

            }
            else {
                setIsValidPassword("Password must have alphanumeric, " +
                    "special and atleast 8 characters");
                setEnteredPassword(pass);
            }

        }
        else {
            Alert.alert(
                "Alert",
                "More than 12 characters not allowed",
                [
                    {
                        text: "Ok",
                    },
                ],
                {
                    cancelable: true,
                }
            );
        }

    }

    let myEmail = "surya2001@gmail.com";
    let myPassword = "pandey@1234";

    const loginStatus = () => {
        if (myEmail == emailAddress && myPassword == enteredPassword) {
            Alert.alert(
                "Alert",
                "Logged in successfully",
                [
                    {
                        text: "Ok",
                        
                    },
                ],
                {
                    cancelable: true,
                }
            );
        }
        else {
            Alert.alert(
                "Alert",
                "Invalid credential",
                [
                    {
                        text: "Ok",
                    },
                ],
                {
                    cancelable: true,
                }
            );
        }

    }

    const ShowHideCall = () => {
        if (showHide == "Show") {
            setShowHide("Hide");
        }
        else {
            setShowHide("Show");
        }
    }

    return (
        <SafeAreaView style={[styles.container]}>
            <View>
                <Text style={styles.text}>Log-In</Text>

                <View>
                    <Text style={styles.textvalidation1}>{isValidEmail}</Text>
                    <TextInput style={styles.input}
                        placeholder="Enter your email"
                        onChangeText={(email) => {
                            checkEmail(email);
                        }}
                        keyboardType="email-address">
                    </TextInput>
                </View>

                <View>

                    <View flexDirection="row" >
                        <TextInput style={styles.input}
                            placeholder="Enter password"
                            onChangeText={(pass) => {
                                checkPassword(pass);
                            }}
                            keyboardType="password"
                            secureTextEntry={showHide == "Hide" ? false : true}

                        ></TextInput>
                        <Text onPress={ShowHideCall} style={styles.inputshowhide}>{showHide}</Text>
                    </View>

                    <Text style={isValidPassword == "Weak password" ? styles.textvalidation1 : styles.textvalidation2}
                    >{isValidPassword}</Text>

                </View>

                <TouchableOpacity style={styles.btn} onPress={loginStatus}>
                    <Text style={styles.textlogin}>Log-In</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.viewdesc}>
                <Text>Don't have an account?</Text>
                <TouchableHighlight onPress={() => { props.SetShow(!props.show) }}>
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
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,

        paddingHorizontal: 20,
        paddingVertical: 10,


    },

    text: {
        fontSize: 25,
        padding: 30,
        color: 'black',
        textAlign: 'center',

    },

    textvalidation1: {
        color: 'red',
        textAlign: 'center',
    },

    textvalidation2: {
        color: 'green',
        textAlign: 'center',
    },

    input: {
        height: 40,
        width: "95%",
        borderBottomWidth: 1,
        marginBottom: 20,
        borderBottomColor: 'gray',
        backgroundColor: '#DCDCDC',
        fontSize: 17,
        textAlign: 'center',
        underlineColorAndroid: "transparent"

    },

    inputshowhide: {
        color: 'red',
        borderRadius: 2,
        position: 'relative',
        right: 35
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
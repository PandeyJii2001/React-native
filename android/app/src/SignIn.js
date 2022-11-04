import React, { useState } from "react";
import {
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    TouchableHighlight, Text, View, Alert, Pressable
} from "react-native";
import { TextInput } from 'react-native-paper';

function SignIn(props) {
    const [showHide, setShowHide] = useState("Show");

    const [isValidEmail, setIsValidEmail] = useState("");
    const [isValidPassword, setIsValidPassword] =
        useState("Password must have alphanumeric, special and atleast 8 characters");

    let validemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let validpassword = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");


    const checkEmail = (email) => {
        if (!validemail.test(email) && email != '') {
            setIsValidEmail("Invalid email");
        }
        else {
            setIsValidEmail("");
        }

    }


    const checkPassword = (pass) => {
        if (pass.length <= 12) {

            if (!validpassword.test(pass) && pass != '') {
                setIsValidPassword("Weak password");
            }
            else if (validpassword.test(pass)) {
                if (pass.length >= 8) {
                    setIsValidPassword("Strong password");
                }
                else {
                    setIsValidPassword("Weak password");
                }

            }
            else {
                setIsValidPassword("Password must have alphanumeric, " +
                    "special and atleast 8 characters");
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

    const checkMaxLengthName = (text) => {
        if (text.length > 20) {
            Alert.alert(
                "Alert",
                "More than 20 characters not allowed",
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
                
                <Text style={styles.text}>Sign-Up</Text>
                <TextInput style={styles.input}
                    placeholder="Enter your name"
                    keyboardType="default"
                    onChangeText={(text) => {
                        checkMaxLengthName(text);
                    }}>
                </TextInput>

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
                    <View flexDirection="row">
                        <TextInput style={styles.input}
                            placeholder="Enter password"
                            onChangeText={(pass) => {
                                checkPassword(pass);
                            }}
                            keyboardType="password"
                            secureTextEntry={showHide == "Hide" ? false : true}

                        ></TextInput>
                        <Text onPress={ShowHideCall} style={styles.inputshowhide} >{showHide}</Text>
                    </View>

                    <Text style={isValidPassword == "Weak password" ? styles.textvalidation1 : styles.textvalidation2}
                    >{isValidPassword}</Text>

                </View>


                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.textsignin}>Sign up</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.viewdesc}>
                <Text>Already have an account?</Text>
                <TouchableHighlight onPress={() => { props.SetShow(!props.show) }}>
                    <Text style={styles.viewdesctext}> Log-In</Text>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        shadowOffset: { width: -2, height: -2 },
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
        borderBottomWidth: 0.5,
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

    textsignin: {
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

})





export default SignIn;





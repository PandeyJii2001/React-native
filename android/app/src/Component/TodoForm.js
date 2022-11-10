import AsyncStorage from '@react-native-async-storage/async-storage';

import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-date-picker';
import { RadioButton } from 'react-native-paper';

import { fetchObjects, save } from '../realm';


function TodoForm({ navigation, props }) {

    // const [open, setOpen] = useState(false)

    const [displaytodos, setDisplaytodos] = useState([]);

    const [title, setTitle] = useState('');
    const [discription, setDiscription] = useState('');
    const [dueDate, setDueDate] = useState(new Date());
    const [status, setStatus] = useState('pending');
    const [checked, setChecked] = useState('pending');

    const fun = async () => {
        let value = fetchObjects('todos');
        setDisplaytodos(value);
        console.log(value);


        // let result = await AsyncStorage.getItem('todos');
        // setDisplaytodos(JSON.parse(result));
         //   console.log((result));
    }

    useEffect(() => {
        fun();
    }, [useIsFocused()])



    const addTodoItem = async (newtodoitem) => {
        let Id = 0;
        displaytodos.forEach((t) => {
            if (t.Id >= Id) {
                Id = t.Id + 1;
            }
        });
        newtodoitem['Id'] = Id;
        console.log(newtodoitem);
        save('todos', newtodoitem);


        fun();

        // let todoListitem = displaytodos;
        // todoListitem.push(newtodoitem);

        // setDisplaytodos(todoListitem);

        // await AsyncStorage.setItem('todos',
        //     JSON.stringify(displaytodos));

        // console.log(AsyncStorage.getItem('todos'));
        // console.log(displaytodos);
    }


    return (

        <ScrollView style={styles.container}>

            <View style={styles.forminput}>
                <TextInput style={styles.input}
                    placeholder="Enter todo's title"
                    maxLength={30}
                    keyboardType="default"
                    onChangeText={(enterTitle) => {
                        setTitle(enterTitle);
                    }}
                >
                </TextInput>
                <TextInput style={styles.input}
                    placeholder="Enter description"
                    maxLength={100}
                    keyboardType="default"
                    onChangeText={(enter) => {
                        setDiscription(enter)
                    }}
                >
                </TextInput>

                <TouchableOpacity style={styles.btnsavedate}>
                    <Text style={styles.textSave}>Select Date</Text>
                </TouchableOpacity>

                <DatePicker
                    model
                    minimumDate={new Date(Date.now())}
                    mode="date"
                    date={dueDate}

                    onDateChange={(date) => {
                        setDueDate(date);

                    }}

                    // open={false}

                    // onConfirm={(date) => {
                    //     setOpen(false);
                    // }}
                    
                    // onCancel={() => {
                    //     setOpen(false)
                    // }}
                />

                <View style={styles.statusView}>
                    <Text style={styles.textStatus1}>Status :</Text>
                    <View style={styles.statusView}>
                        <Text style={styles.textStatus}>Done</Text>
                        <RadioButton
                            value="done"
                            status={checked === 'done' ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked('done');
                                setStatus('done');
                            }}
                        />
                    </View>

                    <View style={styles.statusView}>
                        <Text style={styles.textStatus}>Pending</Text>
                        <RadioButton
                            value="pending"
                            status={checked === 'pending' ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked('pending');
                                setStatus('pending');
                            }}
                        />
                    </View>

                </View>

            </View>




            <TouchableOpacity style={styles.btnsave}
                onPress={() => {
                    let TodoDetails = {
                        Title: title,
                        Discription: discription,
                        DueDate: dueDate.toDateString(),
                        Status: status
                    }

                    if (TodoDetails.Title === '' || TodoDetails.Discription === ''
                        || TodoDetails.DueDate === '' || TodoDetails.Status === '') {
                        alert("Please fill all the required detail")
                    }
                    else {
                        // code to save todo item in array then save array in async storage

                        addTodoItem(TodoDetails);
                        setTitle('');
                        setDiscription('');
                        setDueDate('');
                        setStatus('');
                        navigation.goBack();

                    }

                }}>
                <Text style={styles.textSave}>Save</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.btncancel} >
                <Text style={styles.textSave}
                    onPress={() => navigation.goBack()}
                >Cancel</Text>
            </TouchableOpacity>

        </ScrollView>
    );



}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

    },

    forminput: {
        justifyContent: 'center',
        alignItems: 'center'
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
        underlineColorAndroid: "transparent",
        backgroundColor: 'white',
        //    fontSize: 20,
        //    padding: 10,
    },

    btnsavedate: {
        backgroundColor: 'black',
        padding: 10,
        marginVertical: 20,
        borderRadius: 10,
        width: '40%',

    },

    statusView: {
        flexDirection: 'row',
        marginVertical: 10
    },

    textStatus1: {
        fontSize: 20,
        color: 'black',
        marginLeft: 20,
        marginRight: 5,
        marginVertical: 10,
    },

    textStatus: {
        fontSize: 20,
        color: 'black',
        marginLeft: 20,
        marginRight: 5,

    },

    btnsave: {
        backgroundColor: 'green',
        padding: 10,
        marginVertical: 20,
        borderRadius: 10
    },

    btncancel: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10
    },

    textSave: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    },
})


export default TodoForm;

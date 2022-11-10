import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-date-picker';
import { RadioButton } from 'react-native-paper';

import { editRealm} from '../realm';

function TodoEditForm({ route, navigation }) {

    //Here it give the id of item....we can not write props as route 
    //and route.params return the value that passed in navigator in last page;
    let todoItemId=route.params.Id;


    const [title, setTitle] = useState(route.params.Title);
    const [discription, setDiscription] = useState(route.params.Discription);
    const [dueDate, setDueDate] = useState(new Date(route.params.DueDate));
    const [checked, setChecked] = useState(route.params.Status);
    const [status, setStatus] = useState(route.params.Status);
    
    

    const editItem = (object, id)=>{
        editRealm('todos', object, id);
      }


    return (

        <ScrollView style={styles.container}>

            <View style={styles.forminput}>
                <TextInput style={styles.input}
                defaultValue={route.params.Title}
                    placeholder="Enter todo's title"
                    maxLength={30}
                    keyboardType="default"
                    onChangeText={(enterTitle) => {
                        setTitle(enterTitle);
                        
                    }}
                >
                </TextInput>
                <TextInput style={styles.input}
                defaultValue={route.params.Discription}
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
                    console.log(TodoDetails);

                    if (TodoDetails.Title === '' || TodoDetails.Discription === ''
                        || TodoDetails.DueDate === '' || TodoDetails.Status === '') {
                        alert("Please fill all the required detail")
                    }
                    else {
                       
                        editItem(TodoDetails, todoItemId);

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


export default TodoEditForm;

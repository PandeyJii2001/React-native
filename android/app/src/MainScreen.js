import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TodoList from './TodoList';
import TodoForm from './TodoForm';
const Stack = createNativeStackNavigator();

function MainScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Todo List">
        <Stack.Screen name="Hello, Surya" options={{headerShown: false}}
            component={TodoList} />
        <Stack.Screen name="Add An Item" component={TodoForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainScreen;
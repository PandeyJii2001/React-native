import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TodoList from './TodoList';
import TodoForm from './Component/TodoForm';
import TodoEditForm from './Component/TodoEditForm';

const Stack = createNativeStackNavigator();

function MainScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TodoList">
        <Stack.Screen name="TodoList" options={{headerShown: false}}
            component={TodoList} />
        <Stack.Screen name="Add An Item" component={TodoForm} />
        <Stack.Screen name="Edit Item" component={TodoEditForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }

export default MainScreen;
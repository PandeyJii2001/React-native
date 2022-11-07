import React from 'react';
import { Text } from 'react-native-paper';


function TodoItemCard(props) {

    return (<>
        <Text>{props.todoitem.TodoItem}</Text>

    </>
    )

}

export default TodoItemCard;
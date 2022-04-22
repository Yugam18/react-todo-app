import React, { useContext } from 'react'
import {StateContext,DispatchContext} from './constants';
import {
    List,
    ListItem,
    ListIcon
  } from '@chakra-ui/react';

  import { IconButton,HStack } from '@chakra-ui/react';
  import { DeleteIcon } from "@chakra-ui/icons";


function TodoList() {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    const deleteTask=  (task)=> {
        dispatch({
            type: 'DELETE',
            payload : task
        })

    }

  return (
    <div>
        <ul>
            {state.map((task) => <List key={task} spacing={5}>
  <ListItem>
    {task}
    <IconButton spacing={5} w={2} h={6} onClick= {()=>deleteTask(task)}  colorScheme='red' icon={<DeleteIcon />} />
  </ListItem>
</List>)}
        </ul>
    </div>

  )
}

export default TodoList
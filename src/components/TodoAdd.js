import React,{useState,useReducer} from 'react';
import TodoList from './TodoList';

import {StateContext,DispatchContext,initialState} from './constants';
import reducer from './reducer';
import { HStack, Input } from '@chakra-ui/react';
import { Stack,Button } from '@chakra-ui/react'

function TodoAdd() {

    const [task,setTask] = useState("");
    const [toDoTasks,setTodoTasks] = useState([])
    const [state,dispatch] = useReducer(reducer,initialState);


    function handleChange(e){
       setTask(e.target.value);
        
    }

    function handleClick(event){
        if (task && event.key === 'Enter') {
        dispatch({
            type : "ADD",
            payload : task
        })
        setTask("");
    }
        
    }

    const handleKey = (event) => {
        if (task && event.key === 'Enter') {
            // setTodoTasks([...toDoTasks,task]);
            // console.log(toDoTasks);
            // setTask("");

            dispatch({
                type : "ADD",
                payload : task
            })
            setTask("");
        }
      }

   


  return (
    <div>
        <HStack>
        <Input placeholder='Add Tasks' size='sm' type="text" value={task} onKeyDown={handleKey}   onChange = {handleChange} />
        <Button onClick= {handleClick} colorScheme='teal' variant='solid'>
    Add
  </Button>
 </HStack>
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
            <TodoList/>
            </DispatchContext.Provider>
        </StateContext.Provider>
       
    </div>

  )
}

export default TodoAdd
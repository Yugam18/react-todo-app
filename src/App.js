import logo from './logo.svg';
import './App.css';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import { ChakraProvider } from '@chakra-ui/react';
import {  VStack,Text } from "@chakra-ui/react"

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <VStack p={2}>
      <Text bgGradient="linear(to-l, #432854,#FD0080)"
      bgClip="text"
      fontSize="6xl"
      fontWeight="extrabold">
      Todo App
    </Text>
     <TodoAdd />
     </VStack>
     </ChakraProvider>
    
    </div>
  );
}

export default App;

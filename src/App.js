import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react';


const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  
  {text: 'Tomar curso de intro ReactJS ', completed: false},
  
  {text: 'Llorar con llorona', completed: false},
  
  {text: 'Otro otro otro', completed: false},
  {text: 'Otro otro otro2', completed: false}
];



//JSX
//Si empieza en Mayuscula es un componente function MyComponent()
function App() {
  return (
    
    <React.Fragment>
      <TodoCounter completed={16} total={25} />
      <TodoSearch/>

      <TodoList>
       {defaultTodos.map(todo => (
        <TodoItem 
        key={todo.text}
        text = {todo.text}
        completed = {todo.completed}
        />
       ))}

      </TodoList>

     <CreateTodoButton/>
     </React.Fragment>
    
  );
}

export default App;

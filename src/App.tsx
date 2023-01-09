import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import { Todo } from "./model";
import TodoList from './components/TodoList';

/*let name:string = "Shahrukh";
let age:number = 25;
let isStudent:boolean;
let hobbies1: string[];
let hobbies2: number[];
let role:[number,string]; //tuple
role = [25,"Shahrukh"];

let age1: number | string;
age1 = 25;
age1 = "Shahrukh";

let nodatatype: any; // if don't know datatype use any
let personName: unknown; // if don't know datatype use unknown, but use unknown because it is better than any

type Person = {
  name: string;
  age?: number; 
};
// ? - is used for optional
let person: Person = {
  name: "Shahrukh"
};

let lotOfPeople: Person[];

//type
type X = {
  a: string;
  b: number;
};
type Y = X & {
  c: string;
  d: number;
};

let y: Y = {
  c: "cccc",
  d: 2,
  a: "aaaa",
  b: 1
}

//interface
interface Int_test extends X {
  name: string;
  age: number;
}

function testing(name:string) {
  console.log(name);
}

testing(name);

let testing2: (name:string) => number; //create a function with parameter name(string) and return number
let testing3: (name:string) => void; //create a function with parameter name(string) and return undefined
let testing4: (name:string) => never; //create a function with parameter name(string) and not return anything*/

// const App: React.ReactNode = () => { // ReactNode - supports lot many datatype

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodos([...todos,{id: Date.now(),todoName: todo,isDone: false}]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

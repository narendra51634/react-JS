import React, { useState } from "react";
import Todotitle from "./component/Todotitle";
import Addtodo from "./component/Addtodo";
import Todolist from "./component/Todolist";
import "../src/App.css";

function App() {
  //  let todos= [];

  let todos = [
    { name: "Narendra Kumar", dob: "20/10/1990" },
    { name: "Amit Kumar", dob: "24/5/1993" },
    { name: "Sumit Kumar", dob: "20/10/1996" },
    { name: "Priyanka Kumari", dob: "20/11/1998" },
    { name: "Lalit Kumar", dob: "20/2/1999" },
  ];
  const [todoList, settodoList] = useState(todos);

  const addTodo = (tododata) => {
    const newArr = [...todoList, tododata];
    settodoList(newArr);
  };

const deleteTodo = (todoName) =>{
  let newArr = todoList.filter(datas => datas.name!==todoName );
  settodoList(newArr);
}
console.log(todoList);
  return (
    <div className="container center">
      <Todotitle></Todotitle>
      <Addtodo hendelAddTodo={addTodo}></Addtodo>
      <Todolist todoData={todoList} deletetodo={deleteTodo}></Todolist>
    </div>
  );
}
export default App;

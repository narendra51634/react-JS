import React, { useState } from "react";
import Todotitle from "./component/Todotitle";
import Addtodo from "./component/Addtodo";
import Todolist from "./component/Todolist";
import { todoitemContaxt } from "./Store/ItemStore";
import "../src/App.css";

function App() {
  //  let todos= [];

  let todos = [
    { name: "Narendra Kumar", dob: "20/10/1990",id:1 },
    { name: "Amit Kumar", dob: "24/5/1993",id:2 },
    { name: "Sumit Kumar", dob: "20/10/1996",id:3 },
    { name: "Priyanka Kumari", dob: "20/11/1998",id:4 },
    { name: "Lalit Kumar", dob: "20/2/1999",id:5 },
  ];
  const [todoList, settodoList] = useState(todos);


  const addtodoItem = (tododata) => {
    const newArr = [...todoList, tododata];
    settodoList(newArr);
  };

  const deleteTodo = (todoName) => {
    let newArr = todoList.filter((datas) => datas.name !== todoName);
    settodoList(newArr);
  };



  //console.log(todoList);
  return (
    <todoitemContaxt.Provider
      value={{
        todoitem: todoList,
        addNewItem: addtodoItem,
        deleteTodo: deleteTodo       
      }}
    >
      <div className="container center">
        <Todotitle></Todotitle>
        <Addtodo ></Addtodo>
        <Todolist></Todolist>
      </div>
    </todoitemContaxt.Provider>
  );
}
export default App;

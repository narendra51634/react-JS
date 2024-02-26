import React, { useContext } from "react";
import { todoitemContaxt } from "../Store/ItemStore";

const Todolist = (props) => {
 // let tododata = props.todoData;

  const todoItemObj = useContext(todoitemContaxt); 
  const todoItemList = todoItemObj.todoitem;
  
  
  return (
    <>
      {todoItemList.length === 0 ? "Data not Exist" : null}

      {todoItemList.map((item) => (
        <div key={item.id} className="row Nk-list">
          <div className="col-4">{item.name}</div>
          <div className="col-4 ">{item.dob}</div>
          <div className="col-1 ">
            <button
              onClick={() => deleteTodo(item.name)}
              className="btn btn-danger nk-button"
            >
              Delete{" "}
            </button>
          </div>
          <div className="col-2 ">
         
          </div>
        </div>
      ))}
    </>
  );
};

export default Todolist;

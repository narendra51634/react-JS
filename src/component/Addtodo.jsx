import { useContext, useState } from "react";
import addcss from "./addtodo.module.css";
import { todoitemContaxt } from "../Store/ItemStore";
const Addtodo = () => {
  const [inputVal, setInputVal] = useState("");
  const [inputDate, setInputDate] = useState("");

  const todoItemObj = useContext(todoitemContaxt); 
     console.log(todoItemObj);
  //const editTodo = todoItemObj.editTodo

  const { addNewItem } = useContext(todoitemContaxt);
  
 
  
  const hendelInputValue = (event) => {
    setInputVal(event.target.value);
  };

  const hendelDateValue = (event) => {
    setInputDate(event.target.value);
  };

  const hendelAddTododata = () => {
    let tododata = { name: inputVal, dob: inputDate };
    addNewItem(tododata);
    setInputVal("");
    setInputDate("");
  };



  return (
    <>
      <div className="row">
        <div className="col-4">
          <input
            type="text"
            value={inputVal}
            placeholder="input todo"
            className="form-control"
            onChange={hendelInputValue}
          />
        </div>
        <div className="col-4 ">
          <input
            type="date"
            value={inputDate}
            onChange={hendelDateValue}
            className="form-control"
          />
        </div>
        <div className="col-4 ">
          <button
            onClick={hendelAddTododata}
            className={`${addcss["nk-button"]} btn btn-primary`}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Addtodo;

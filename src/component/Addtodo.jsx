import { useState } from "react";
import addcss from "./addtodo.module.css";
const Addtodo = ({ hendelAddTodo }) => {
  const [inputVal, setInputVal] = useState("");

  const [inputDate, setInputDate] = useState("");

  const hendelInputValue = (event) => {
    setInputVal(event.target.value);
  };

  const hendelDateValue = (event) => {
    setInputDate(event.target.value);
  };

  const hendelAddTododata = () => {
    let tododata = { name: inputVal, dob: inputDate };
    hendelAddTodo(tododata);
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

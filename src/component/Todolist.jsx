import React from 'react';
const Todolist = (props) => {
  
  let tododata = props.todoData;
  return (
    <>
    {  tododata.length === 0 ? 'Data not Exist':null   }

    {tododata.map((item) =>
    
        <div key={{item}} className="row Nk-list">
        <div className="col-4">{item.name}</div>
        <div className="col-4 ">{item.dob}</div>
        <div className="col-4 ">
          <button onClick={()=> props.deletetodo(item.name)} className="btn btn-danger nk-button">Delete </button>
        </div>
      </div>
      )}
    
      
      
     
    </>
  );
};

export default Todolist;

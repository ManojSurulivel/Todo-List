import React, { useState,useEffect,useRef } from "react";
import "./Todo.css";


function Todo() {
  const [name, setName] = useState("react");
  const inputRef = useRef(null);
  const[display,setDisplay] =  useState([]);
  const[error,setError] = useState("")

   const handleDelete = (index) => {
    const updateDelete = display.filter((_,i)=> i !== index);
    setDisplay(updateDelete);
    setError("")
   };

  const addTodo = () => {
    if (name.trim() === "") {
      setError(name.length == 0 ? "Name cannot be empty" : "");
    } else if (display.includes(name.trim())) {
      setError("Already exists");
    } else {
      setDisplay([...display, name]);
      setError("");
      setName("");          
    }
  };

   const handleSubmit = (e) => {
    e.preventDefault();
   }

   useEffect(()=>{
    inputRef.current.focus();
  },[]);

  return (
    <form onSubmit={handleSubmit}>
       <div className="todo-container">
    <h1 className="title">React TodoList</h1>
      <div className="input-group">
      <input
        type="text"
        value={name}
        ref={inputRef}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter todo..."
        className="todo-input"
      />
      <button onClick={addTodo} className="add-btn">Add</button>
      </div>

      <h1 style={{color:"black"}}>{error ? name  : ""} <span style={{color:"red"}}>{error}</span></h1>

        <ul className="todo-list">
        {
        display.map((value, index) => (
          <li key={index} className="todo-item">
            <h5>{value}</h5>
            <button onClick={()=>handleDelete(index)} className="delete-btn">delete</button>
            </li>
      ))
      }
        </ul> 
    
    </div>
    </form>
   
  );
}

export default Todo;

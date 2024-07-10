import React, { useState } from "react";

function App() {
  const [item,setItem] = useState("");
  const [items,setList] = useState([]);
  function handelChange(event){
    const {value} = event.target;
    setItem(value);
  }
  function handelClick(){
    
    setList((preVal) =>{
      return [...preVal,item];
    });
    setItem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handelChange} value={item} type="text" />
        <button onClick={handelClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todo) => <li>{todo}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;

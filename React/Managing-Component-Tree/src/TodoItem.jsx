import React, { useState } from "react";

function TodoItem(prop) {
  const [isDone, setDone] = useState(false);
  // function handleClick() {
  //   setDone((preVal) => !preVal);
  // }
  return (
    <div onClick={() => prop.onChecked(prop.id)}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {prop.todoItem}
      </li>
    </div>
  );
}

export default TodoItem;

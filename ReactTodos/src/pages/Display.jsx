import React from "react";

const Display = (props) => {
  if (props.todos) {
    return (
      <ul>
        {props.todos.map((todo) => (
          <li key={todo._id}>{todo.reminder}</li>
        ))}
      </ul>
    );
  } else {
    return <h1>Still Loading or No Todos</h1>;
  }
};

export default Display;

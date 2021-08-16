import React from "react";
import { useState } from "react";

const Form = (props) => {
  const {
    initialState = { reminder: "", completed: false },
    submitFunc = () => {},
    label = "submit",
    history,
  } = props;

  // The Form state
  const [formState, setFormState] = useState(initialState);

  // The handle change function
  const handleChange = (e) => {
    const newState = { ...formState };
    if (e.target.type === "checkbox") {
      newState[e.target.name] = e.target.checked;
    } else {
      newState[e.target.name] = e.target.value;
    }
    setFormState(newState);
  };

  // Handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    submitFunc(formState);
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="reminder"
        value={formState.reminder}
        onChange={handleChange}
      />
      <input
        type="checkbox"
        name="completed"
        checked={formState.completed}
        onChange={handleChange}
      />
      <input type="submit" value={label} />
    </form>
  );
};

export default Form;

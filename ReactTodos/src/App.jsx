import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Display from "./pages/Display";
import Form from "./pages/Form";

function App() {
  // API base url
  const url = "https://todos-project-api-081521.herokuapp.com/todos";

  // Make state to hold API data
  const [todos, setTodos] = useState(null);

  // Function to retrieve data
  const getTodos = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="App">
      <h1>CJ's Todo App</h1>
      <Switch>
        <Route exact path="/">
          <Display todos={todos} />
        </Route>
        <Route path="/new">
          <Form />
        </Route>
        <Route path="/edit">
          <Form />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

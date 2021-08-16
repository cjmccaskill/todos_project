import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Display from "./pages/Display";
import Form from "./pages/Form";

function App(props) {
  // API base url
  const url = "https://todos-project-api-081521.herokuapp.com/todos";

  // Make state to hold API data
  const [todos, setTodos] = useState(null);

  // State to hold edit target
  const [todoToEdit, setTodoToEdit] = useState({});

  // Function to retrieve data
  const getTodos = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTodos(data);
  };

  // Function to Create Todos
  const createTodo = async (newTodo) => {
    // make new todo
    await fetch(url, {
      mehtod: "post",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    // update list of todos
    getTodos();
  };

  // Function to Update Todos
  const updateTodo = async (updateTodo) => {
    // make new todo
    await fetch(url + `/${updateTodo._id}`, {
      mehtod: "put",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateTodo),
    });
    // update list of todos
    getTodos();
  };

  // Function to Delete Todos
  const deleteTodo = async (deletedTodo) => {
    // make new todo
    await fetch(url + `/${deletedTodo._id}`, {
      mehtod: "delete",
    });
    // update list of todos
    getTodos();
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="App">
      <h1>CJ's Todo App</h1>
      <Link to="/new">
        <button>Create a Todo</button>
      </Link>
      <Switch>
        <Route exact path="/">
          <Display
            todos={todos}
            editThisTodo={setTodoToEdit}
            history={props.history}
            deleteTodo={deleteTodo}
          />
        </Route>
        <Route exact path="/new">
          <Form
            submitFunc={createTodo}
            history={props.history}
            label="create"
          />
        </Route>
        <Route exact path="/edit">
          <Form
            submitFunc={updateTodo}
            history={props.history}
            label="update"
            initialState={todoToEdit}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

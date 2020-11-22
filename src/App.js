import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import ToDo from "./components/ToDo";
import AddToDo from "./components/AddToDo";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
// import uuid from "uuid/v4";
import { v4 as uuid } from "uuid";

class App extends Component {
  state = {
    todos: [
      {
        _id: uuid(),
        title: "Exercise",
        completed: false,
      },
      {
        _id: uuid(),
        title: "Breakfast",
        completed: false,
      },
      {
        _id: uuid(),
        title: "Study",
        completed: false,
      },
    ],
  };
  markComplete = (_id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo._id === _id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  delToDo = (_id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo._id !== _id)],
    });
  };
  addToDo = (title) => {
    // console.log(title);
    const newToDo = {
      // _id: uuid.v4(),
      _id: uuid(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newToDo],
    });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="Container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddToDo addToDo={this.addToDo} />{" "}
                  <ToDo
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delToDo={this.delToDo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

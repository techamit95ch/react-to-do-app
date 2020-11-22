import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
class ToDo extends Component {
  //   markComplete = (id) => {
  //     console.log(id);
  //   };
  render() {
    //  console.log(this.prop);
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo._id}
        todo={todo}
        markComplete={this.props.markComplete}
        delToDo={this.props.delToDo}
      />
    ));
  }
}
// Proptype Practice
ToDo.propTypes = {
  todos: PropTypes.array.isRequired,
};
export default ToDo;

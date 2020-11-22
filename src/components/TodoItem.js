import React, { Component } from "react";
import PropTypes from "prop-types";
export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px solid #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { _id, title } = this.props.todo;
    // console.log(this.props.todo.completed);
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            name=""
            onChange={this.props.markComplete.bind(this, _id)}
          />{" "}
          {title}
          <button style={btnstyle} onClick={this.props.delToDo.bind(this, _id)}>
            x
          </button>
        </p>
      </div>
    );
  }
}
// Proptype Practice
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};
const btnstyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  cursor: "pointer",
  cssFloat: "right",
  borderRadius: "50%",
};
export default TodoItem;

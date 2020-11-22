import React, { Component } from "react";

export class AddToDo extends Component {
  state = {
    title: "",
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit= (event)=>{
      event.preventDefault();
      this.props.addToDo(this.state.title);
      this.setState({
        title: ''
      });
  }
  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{
          display: "flex",
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="Add To Do ..."
          style={{ flex: "10", padding: "5px", border: 'none', textAlign : 'center' }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}
// const AddToDoStyle = {};
export default AddToDo;

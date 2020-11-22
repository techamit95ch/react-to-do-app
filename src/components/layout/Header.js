import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <h1> To DO List</h1>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        |
        <Link to="/about" style={linkStyle}>
          About
        </Link>
      </header>
    );
  }
}
const headerStyle = {
  background: "#333",
  color: "#ddd",
  textAlign: "center",
  padding: "10px",
};
const linkStyle = {
  background: "#333",
  color: "#ddd",
  textAlign: "center",
  padding: "10px",
  textDecoration: "None",
};
export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
  let nav = props.user ? (
    <div>
      <Link to="/" className="NavBar-link" onClick={props.handleLogout}>
        LOG OUT
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link exact to="/add">
        ADD TO DO {" "}
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className="NavBar-welcome">WELCOME, {props.user.name}</span>
      <Link to="/">
        <img
          src="https://i.imgur.com/P3oILwq.jpg"
          width="30"
          height="30"
          alt="Selena"
        />
      </Link>
    </div>
  ) : (
    <div>
      <Link to="/login" className="NavBar-link">
        LOG IN
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className="NavBar-link">
        SIGN UP
      </Link>
    </div>
  );

  return <div className="NavBar">{nav}</div>;
};

export default NavBar;

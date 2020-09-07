import React from "react";
import { Navbar } from "react-bootstrap";
import Home from "./Home";
import "./container.css";
function Container() {
  return (
    <div className="app">
      <Navbar>
        <Navbar.Brand href="#home">sojjy's Poll</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#login">Login</a>
          </Navbar.Text>
          <Navbar.Text>
            <a href="#signup">Sign Up</a>
          </Navbar.Text>
          {/*<Navbar.Text> Signed in as: <a href="#login">sojjyCodes</a>
          </Navbar.Text>*/}
        </Navbar.Collapse>
      </Navbar>
      <div className="component">
        <h1 style={{color: "rgb(44, 202, 250)"}}>Today's Poll</h1>
        <Home />
        <Home />
        <Home />
        <Home />
        <Home />
      </div>
    </div>
  );
}

export default Container;

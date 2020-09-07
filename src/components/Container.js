import React from "react";
import { Navbar } from "react-bootstrap";
import Home from "./Home";
function Container() {
  return (
    <div className="app">
      <Navbar>
        <Navbar.Brand href="#home">Thumbnail Picker</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">sojjyCodes</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Home />
    </div>
  );
}

export default Container;

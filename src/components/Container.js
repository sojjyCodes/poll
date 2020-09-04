import React from "react";
import { Navbar, Button } from "react-bootstrap";
import "./container.css";
import Home from "./Home";

function Container() {
  return (
    <div className="container">
      <div className="navigation-bar">
        <Navbar className="navigation">
          <Navbar.Brand href="#home">sojjy's Poll</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="/login">sojjyCodes</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default Container;

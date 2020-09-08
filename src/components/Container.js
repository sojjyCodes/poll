import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./Home";
import "./container.css";
function Container() {
  return (
    <div className="app">
      <Navbar variant="dark" style={{ backgroundColor: "#24292E" }}>
        <Navbar.Brand href="#home">sojjy's Poll</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav variant="pills">
            <Nav.Link href="#login" style={{ marginRight: "10px" }}>
              Login
            </Nav.Link>
            <Nav.Link href="#signup">Sign Up</Nav.Link>
            {/*<Nav.Text> Signed in as: <Nav.Link href="#login">sojjyCodes</Nav.Link>
          </Nav.Text>*/}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="component">
        <h1 style={{ color: "rgb(44, 202, 250)" }}>Today's Poll</h1>
        <Home />
        <Home />
      </div>
    </div>
  );
}

export default Container;

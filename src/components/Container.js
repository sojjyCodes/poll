import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { IoMdPodium } from "react-icons/io";
import Home from "./Home";
import "./container.css";
import Switch from "react-bootstrap/esm/Switch";
function Container() {
  return (
    <div className="app">
      <Navbar variant="dark" style={{ backgroundColor: "#24292E" }}>
        <Navbar.Brand href="#home">
          sojjy's Poll
          <IoMdPodium />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav variant="pills">
            <Nav.Link href="#login" style={{ marginRight: "10px" }}>
              Login
            </Nav.Link>

            <Nav.Link href="#signup">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="component">
        <h1 style={{ color: "rgb(44, 202, 250)" }}>
          Today's Selection <IoMdPodium />
        </h1>
        <Home />
        <Home />
      </div>
    </div>
  );
}

export default Container;

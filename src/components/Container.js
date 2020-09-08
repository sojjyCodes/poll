import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { IoMdPodium, IoMdLogOut, IoMdPerson } from "react-icons/io";
import Home from "./Home";
import "./container.css";

function Container() {
    const User = "sojjyCodes";

    return (
        <div className="app">
            <Navbar variant="dark" style={{ backgroundColor: "#24292E" }}>
                <Navbar.Brand href="#home">
                    sojjy's Poll
                    <IoMdPodium />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#login">Login</Nav.Link>
                        <Nav.Link
                            href="#signup"
                            style={{ paddingRight: "85px" }}
                        >
                            Sign Up
                        </Nav.Link>
                        <NavDropdown id="collasible-nav-dropdown">
                            <IoMdPerson />
                            <NavDropdown.Item href="#">
                                Logout <IoMdLogOut />
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="component">
                <h1 style={{ color: "rgb(44, 202, 250)", marginTop: "40px" }}>
                    Today's Selection <IoMdPodium />
                </h1>
                <Home />
                <Home />
            </div>
        </div>
    );
}

export default Container;

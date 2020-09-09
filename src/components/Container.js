import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
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
                            style={{ marginRight: "85px" }}
                        >
                            Sign Up
                        </Nav.Link>
                        <IoMdPerson
                            style={{
                                marginTop: "7px",
                                color: "cyan",
                                fontSize: "25px",
                            }}
                        />
                        <Dropdown.Menu id="collasible-nav-dropdown">
                            <Dropdown.Menu.Item href="#">
                                Logout <IoMdLogOut />
                            </Dropdown.Menu.Item>
                        </Dropdown.Menu>
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

import React, { Component, useState } from "react";
import { Navbar, Nav, Dropdown, Alert, Button } from "react-bootstrap";
import { IoMdPodium, IoMdLogOut, IoMdPerson } from "react-icons/io";
import Home from "./Home";
import "./container.css";
import { render } from "@testing-library/react";

export function alert() {
    alert("You just clicked a button")
}

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
                        <Nav.Link href="#login" disabled>
                            Login
                        </Nav.Link>
                        <Nav.Link
                            href="#signup"
                            style={{ marginRight: "15px" }}
                            disabled
                        >
                            Sign Up
                        </Nav.Link>

                        <Dropdown drop="down">
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                <IoMdPerson />
                            </Dropdown.Toggle>

                            <Dropdown.Menu alignRight="false">
                                <Dropdown.Item
                                    href="#logout"
                                    onClick={() =>Alert()}
                                >
                                    Logout <IoMdLogOut />
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
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

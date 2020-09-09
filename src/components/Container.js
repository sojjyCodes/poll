import React, { Component, useState } from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { IoMdPodium, IoMdLogOut, IoMdPerson } from "react-icons/io";
import Home from "./Home";
import "./container.css";

function Container() {
    const User = "sojjyCodes";

    return (
        <div className="app">
            <Navbar variant="dark" style={{ backgroundColor: "#24292E" }}>
                <Navbar.Brand href="/">
                    sojjy's Poll
                    <IoMdPodium />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/login" disabled>
                            Login
                        </Nav.Link>
                        <Nav.Link
                            href="/signup"
                            style={{ marginRight: "15px" }}
                            disabled
                        >
                            Sign Up
                        </Nav.Link>

                        <Dropdown drop="down">
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                <IoMdPerson style={{ color: "#007CFF" }} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu alignRight="false">
                                <Dropdown.Item
                                    style={{
                                        color: "#5f54ff",
                                    }}
                                    href="/logout"
                                >
                                    Logout <IoMdLogOut />
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Container;
